import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GameDesignRoutingModule } from "./game-design-routing.module";
import { GameDesignComponent } from "./components/game-design/game-design.component";

@NgModule({
    imports: [
        CommonModule,
        GameDesignRoutingModule
    ],
    declarations: [GameDesignComponent]
})
export class GameDesignModule {
}
