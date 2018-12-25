import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-projects",
    templateUrl: "./projects.component.html",
    styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit {

    constructor() { }

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

}
