class IndexView {
    public static initialize(): void {
        const button: HTMLElement = document.getElementById("btnProjects");
        button.addEventListener("click", () => this.projectsClicked());
    }

    public static projectsClicked(): void {
        console.log("DHI");
    }
}

IndexView.initialize();