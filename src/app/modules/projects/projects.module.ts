import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProjectsRoutingModule } from "./projects-routing.module";
import { ProjectsComponent } from "./components/projects/projects.component";
import { OneFunctionComponent } from "./components/one-function/one-function.component";
import { ColdsteelComponent } from "./components/coldsteel/coldsteel.component";

@NgModule({
    imports: [
        CommonModule,
        ProjectsRoutingModule
    ],
    declarations: [
        ProjectsComponent,
        OneFunctionComponent,
        ColdsteelComponent
    ]
})
export class ProjectsModule { }
