import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GameDesignRoutingModule } from "./game-design-routing.module";
import { GameDesignComponent } from "./components/game-design/game-design.component";
import { EveDotaMmoComponent } from "./components/eve-dota-mmo/eve-dota-mmo.component";

@NgModule({
    imports: [
        CommonModule,
        GameDesignRoutingModule
    ],
    declarations: [GameDesignComponent, EveDotaMmoComponent]
})
export class GameDesignModule {
}
