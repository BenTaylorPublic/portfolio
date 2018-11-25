import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { OneFunctionComponent } from "./one-function.component";

describe("OneFunctionComponent", () => {
    let component: OneFunctionComponent;
    let fixture: ComponentFixture<OneFunctionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OneFunctionComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OneFunctionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
