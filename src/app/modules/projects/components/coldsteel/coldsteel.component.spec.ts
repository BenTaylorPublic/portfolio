import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ColdsteelComponent } from "./coldsteel.component";

describe("ColdsteelComponent", () => {
    let component: ColdsteelComponent;
    let fixture: ComponentFixture<ColdsteelComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ColdsteelComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ColdsteelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
