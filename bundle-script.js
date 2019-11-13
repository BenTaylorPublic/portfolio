console.log("Bundling...");

const bundles = [
    {
        name: "script",
        entryDir: "",
        entry: "script.js"
    },
    {
        name: "example",
        entryDir: "modules/example-module/",
        entry: "example.js"
    }
];

const shared = [
    {
        entryDir: "",
        entry: "some-class.js",
        expose: "./some-class"
    }
];


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
    b.add("./tsc-dist/" + bundle.entryDir + bundle.entry);
    for (const sharedJs of shared) {
        b.exclude("./tsc-dist/" + sharedJs.entryDir + sharedJs.entry);
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

        fs.writeFile(outputFile, bundleAsString, function (err2) {
            if (err2) {
                return console.log(err2);
            }
        });
    });
}

let b = browserify();
for (const sharedJs of shared) {
    b.require("./tsc-dist/" + sharedJs.entryDir + sharedJs.entry, {
        expose: sharedJs.expose
    });
}
b.bundle().pipe(fs.createWriteStream("./" + outDir + "shared.bundle.js"));