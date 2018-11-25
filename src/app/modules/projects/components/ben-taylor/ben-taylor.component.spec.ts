import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BenTaylorComponent } from "./ben-taylor.component";

describe("BenTaylorComponent", () => {
    let component: BenTaylorComponent;
    let fixture: ComponentFixture<BenTaylorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BenTaylorComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BenTaylorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
