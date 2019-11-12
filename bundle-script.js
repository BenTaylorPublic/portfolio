console.log("Bundling...");
const environment = process.argv.slice(2)[0];

console.log("Environment: " + environment);

let directory = "";
if (environment === "prod") {
    directory = "docs";
} else if (environment === "dev") {
    directory = "src";
}

const browserify = require("browserify");
const fs = require("fs");

let b = browserify();
b.add("./tsc-dist/script.js");
b.bundle().pipe(fs.createWriteStream("./" + directory + "/script.bundle.js"));