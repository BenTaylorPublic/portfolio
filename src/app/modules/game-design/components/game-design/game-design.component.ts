import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "app-landing",
    templateUrl: "./game-design.component.html",
    styleUrls: ["./game-design.component.scss"]
})
export class GameDesignComponent implements OnInit {

    public gameDesignToShow: "none" | "project-pandora" = "none";

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router) {

        this.activatedRoute.params.subscribe((parameters) => {
            if (this.gameDesignToShow === parameters.gameDesignToShow) {
                this.gameDesignToShow = "none";
                return;
            }

            if (parameters.gameDesignToShow === "project-pandora") {
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
        if (this.gameDesignToShow === design) {
            this.router.navigate(["game-design"]);
            return;
        }
        this.router.navigate(["game-design", design]);
    }

}
