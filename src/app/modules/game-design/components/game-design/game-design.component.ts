import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "app-landing",
    templateUrl: "./game-design.component.html",
    styleUrls: ["./game-design.component.scss"]
})
export class GameDesignComponent implements OnInit {

    public gameDesignToShow: "none" | "eve-dota-mmo" = "none";

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router) {

        this.activatedRoute.params.subscribe((parameters) => {
            if (parameters.gameDesignToShow === "eve-dota-mmo") {
                this.gameDesignToShow = parameters.gameDesignToShow;
            }
        });
    }

    ngOnInit() {
    }

    public homeButtonClicked(): void {
        this.router.navigate([""]);
    }

    public designClicked(design: string): void {
        this.router.navigate(["game-design", design]);
    }

}
