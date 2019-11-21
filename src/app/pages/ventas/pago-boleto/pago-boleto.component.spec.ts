import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoBoletoComponent } from './pago-boleto.component';

describe('PagoBoletoComponent', () => {
  let component: PagoBoletoComponent;
  let fixture: ComponentFixture<PagoBoletoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoBoletoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoBoletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
