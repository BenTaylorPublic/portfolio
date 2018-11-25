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

    public currentTab: ProjectEnum = ProjectEnum.OneFunction;

    constructor() { }

    ngOnInit() {
    }

}
