import { MyCoolClass } from "./shared/classes/some-class";
import { MyOtherCoolClass } from "./shared/classes/other-class";

function derp(): void {
    console.log("NewLog");
    MyCoolClass.hello("Script");
    MyOtherCoolClass.hello("SUP");
}

derp();