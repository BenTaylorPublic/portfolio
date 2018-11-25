import { Component, OnInit } from "@angular/core";

export enum ProjectEnum {
    OneFunction = 0,
    Coldsteel = 1
}

@Component({
    selector: "app-projects",
    templateUrl: "./projects.component.html",
    styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit {

    public currentProject: ProjectEnum = ProjectEnum.OneFunction;

    constructor() { }

    ngOnInit() {
    }

    public updateCurrentProject(newValue: string): void {
        if (newValue === "onefunction") {
            this.currentProject = ProjectEnum.OneFunction;
        } else if (newValue === "coldsteel") {
            this.currentProject = ProjectEnum.Coldsteel;
        }
    }

}
