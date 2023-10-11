import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyByuserComponent } from './property-byuser.component';

describe('PropertyByuserComponent', () => {
  let component: PropertyByuserComponent;
  let fixture: ComponentFixture<PropertyByuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyByuserComponent]
    });
    fixture = TestBed.createComponent(PropertyByuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
