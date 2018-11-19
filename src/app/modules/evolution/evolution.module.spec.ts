import { EvolutionModule } from "./evolution.module";

describe("EvolutionModule", () => {
    let evolutionModule: EvolutionModule;

    beforeEach(() => {
        evolutionModule = new EvolutionModule();
    });

    it("should create an instance", () => {
        expect(evolutionModule).toBeTruthy();
    });
});
