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
    let b = browserify();
    console.log("Bundling " + bundle.name);
    b.add("./tsc-dist/" + bundle.entryDir + bundle.entry, {
        basedir: "./"
    });
    for (const sharedJs of shared) {
        b.exclude("./tsc-dist/" + sharedJs.entryDir + sharedJs.entry);
    }
    b.bundle().pipe(fs.createWriteStream("./" + outDir + bundle.entryDir + bundle.name + ".bundle.js"));
}

let b = browserify();
console.log("Bundling shared");
for (const sharedJs of shared) {
    b.require("./tsc-dist/" + sharedJs.entryDir + sharedJs.entry, {
        expose: sharedJs.expose,
        basedir: "./"
    });
}
b.bundle().pipe(fs.createWriteStream("./" + outDir + "shared.bundle.js"));