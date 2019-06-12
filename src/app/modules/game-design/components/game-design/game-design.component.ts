import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-landing",
    templateUrl: "./game-design.component.html",
    styleUrls: ["./game-design.component.scss"]
})
export class GameDesignComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    public homeButtonClicked(): void {
        this.router.navigate([""]);
    }

}
