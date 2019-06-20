import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class AppService {

    private appVersion: string = "0.1.5";

    constructor() {
        console.info("App version v" + this.appVersion);
    }
}
