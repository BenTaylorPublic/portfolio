import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


/** The routes for the project*/
const routes: Routes = [
    // Other Routes
    { path: "", loadChildren: () => import("../landing/landing.module").then(m => m.LandingModule) },
    { path: "projects", loadChildren: () => import("../projects/projects.module").then(m => m.ProjectsModule) },
    { path: "game-design", loadChildren: () => import("../game-design/game-design.module").then(m => m.GameDesignModule) },
    { path: "**", redirectTo: "" }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
