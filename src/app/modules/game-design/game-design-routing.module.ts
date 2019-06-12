import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GameDesignComponent } from "./components/game-design/game-design.component";

const routes: Routes = [
    { path: "", component: GameDesignComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GameDesignRoutingModule {
}
