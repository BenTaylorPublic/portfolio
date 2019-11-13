import { MyCoolClass } from "./shared/some-class";

function derp(): void {
    console.log("NewLog");
    MyCoolClass.hello("Script");
}

derp();