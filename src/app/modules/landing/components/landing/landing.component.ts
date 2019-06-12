import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-landing",
    templateUrl: "./landing.component.html",
    styleUrls: ["./landing.component.scss"]
})
export class LandingComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    public projectsButtonClicked(): void {
        this.router.navigate(["projects"]);
    }

    public gameDesignButtonClicked(): void {
        this.router.navigate(["game-design"]);
    }

    public githubClicked(): void {
        window.open("https://github.com/BenTaylorPublic", "_blank");
    }
}
