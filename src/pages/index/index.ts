class IndexView {
    public static initialize(): void {
        //In a timeout to not trigger the animation on first load
        //Maybe not the best but it works for now
        setTimeout(() => {
            const projectCardChilds: HTMLCollectionOf<Element> = document.getElementsByClassName("projectCardChild");
            for (let i: number = 0; i < projectCardChilds.length; i++) {
                projectCardChilds[i].classList.remove("preload");
            }
        }, 200);
        this.detectMobiles();
    }

    private static detectMobiles(): void {
        const toMatch = [
            /Android/i,
            /iPhone/i,
        ];

        if (toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        })) {
            document.body.classList.add("mobile");
        }
    }
}

IndexView.initialize();