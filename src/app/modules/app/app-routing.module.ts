import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


/** The routes for the project*/
const routes: Routes = [
    // Other Routes
    { path: "", loadChildren: () => import('../landing/landing.module').then(m => m.LandingModule) },
    { path: "projects", loadChildren: () => import('../projects/projects.module').then(m => m.ProjectsModule) },
    { path: "test", loadChildren: () => import('../test/test.module').then(m => m.TestModule) },
    // TODO: 404 route maybe, doubt it, but ask
    { path: "**", redirectTo: "" }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
