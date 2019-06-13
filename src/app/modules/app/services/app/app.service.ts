import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class AppService {

    private appVersion: string = "0.1.2";

    constructor() {
        console.info("App version v" + this.appVersion);
    }
}
