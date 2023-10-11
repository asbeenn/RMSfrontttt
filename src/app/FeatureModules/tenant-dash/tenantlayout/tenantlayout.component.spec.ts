import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantlayoutComponent } from './tenantlayout.component';

describe('TenantlayoutComponent', () => {
  let component: TenantlayoutComponent;
  let fixture: ComponentFixture<TenantlayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenantlayoutComponent]
    });
    fixture = TestBed.createComponent(TenantlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
