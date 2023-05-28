import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtralisComponent } from './otralis.component';

describe('OtralisComponent', () => {
  let component: OtralisComponent;
  let fixture: ComponentFixture<OtralisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtralisComponent]
    });
    fixture = TestBed.createComponent(OtralisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
