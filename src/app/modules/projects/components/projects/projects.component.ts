import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-projects",
    templateUrl: "./projects.component.html",
    styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    public projectCardClicked(projectName: string): void {
        if (projectName === "onefunction") {
            window.open("https://github.com/BenTaylorPublic/one-function", "_blank");
        } else if (projectName === "coldsteel") {
            alert("Coldsteel isn't currently on Github, but check back soon!");
        } else if (projectName === "bentaylor") {
            window.open("https://github.com/BenTaylorPublic/bentaylorsrc", "_blank");
        }
    }

    public homeButtonClicked(): void {
        this.router.navigate([""]);
    }

}
