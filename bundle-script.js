console.log("Bundling...");

const bundles = [
    {
        name: "script",
        entryDir: ""
    }
];

const shared = [];


const environment = process.argv.slice(2)[0];

console.log("Environment: " + environment);

let outDir = "";
if (environment === "prod") {
    outDir = "docs/";
} else if (environment === "dev") {
    outDir = "src/";
}

const browserify = require("browserify");
const fs = require("fs");

for (const bundle of bundles) {
    const outputFile = "./" + outDir + bundle.entryDir + bundle.name + ".bundle.js";

    let b = browserify();
    b.add("./tsc-dist/" + bundle.entryDir + bundle.name + ".js");
    for (const sharedJs of shared) {
        b.exclude("./tsc-dist/shared/" + sharedJs.entryDir + sharedJs.name + ".js");
    }
    b.bundle(function (err1, buf) {

        if (err1) {
            console.log(err1);
            return;
        }

        /*
        Manually manipulating the javascript
        This is because in the dom it's a flat structure, but Browserify requires still have the relative layout
        The only thing it needs to "require" is shared stuff, so it should be fine to replace fix the path
        */
        let bundleAsString = buf.toString();
        bundleAsString = bundleAsString.split(`"../../../`).join(`"./`);
        bundleAsString = bundleAsString.split(`"../../`).join(`"./`);
        bundleAsString = bundleAsString.split(`"../`).join(`"./`);

        checkNonSharedBundle(bundleAsString);

        fs.writeFile(outputFile, bundleAsString, function (err2) {
            if (err2) {
                return console.log(err2);
            }
        });
    });
}

let b = browserify();
for (const sharedJs of shared) {
    b.require("./tsc-dist/shared/" + sharedJs.entryDir + sharedJs.name + ".js", {
        expose: "./shared/" + sharedJs.entryDir + sharedJs.name
    });
}
b.bundle().pipe(fs.createWriteStream("./" + outDir + "shared.bundle.js"));

function checkNonSharedBundle(bundleAsString) {
    const regex = new RegExp(/"\.\/shared\/.*":[^undefined]/g)
    if (regex.test(bundleAsString) &&
        environment === "prod") {
        throw "Shared module bundled into regular bundle";
    }
}