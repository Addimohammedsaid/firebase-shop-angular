import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartSummaryComponent } from './shipping-cart-summary.component';

describe('ShippingCartSummaryComponent', () => {
  let component: ShoppingCartSummaryComponent;
  let fixture: ComponentFixture<ShoppingCartSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
