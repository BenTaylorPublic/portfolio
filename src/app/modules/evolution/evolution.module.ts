import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EvolutionRoutingModule } from "./evolution-routing.module";
import { EvolutionComponent } from './components/evolution/evolution.component';

@NgModule({
    imports: [
        CommonModule,
        EvolutionRoutingModule
    ],
    declarations: [EvolutionComponent]
})
export class EvolutionModule { }
