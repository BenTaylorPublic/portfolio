import { Component, OnInit } from "@angular/core";

const boardWidth: number = 160;
const boardHeight: number = 90;

@Component({
    selector: "app-evolution",
    templateUrl: "./evolution.component.html",
    styleUrls: ["./evolution.component.scss"]
})
export class EvolutionComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        this.constructBoard();
    }

    private constructBoard(): void {
        const gameBoardDiv: HTMLDivElement = document.getElementById("evolutionBoard") as HTMLDivElement;
        const table: HTMLTableElement = document.createElement("table");

        for (let y = 0; y < boardHeight; y++) { //For each row
            const tableRow: HTMLTableRowElement = document.createElement("tr");
            for (let x = 0; x < boardWidth; x++) { //For each column
                const tableCell: HTMLTableCellElement = document.createElement("td");
                tableCell.id = "cell-" + x.toString() + "-" + y.toString();
                tableRow.appendChild(tableCell);
            }
            table.appendChild(tableRow);
        }
        gameBoardDiv.appendChild(table);
    }

}
