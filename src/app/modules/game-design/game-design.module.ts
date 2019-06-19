import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GameDesignRoutingModule } from "./game-design-routing.module";
import { GameDesignComponent } from "./components/game-design/game-design.component";
import { ProjectPandoraComponent } from "./components/project-pandora/project-pandora.component";

@NgModule({
    imports: [
        CommonModule,
        GameDesignRoutingModule
    ],
    declarations: [GameDesignComponent, ProjectPandoraComponent]
})
export class GameDesignModule {
}
