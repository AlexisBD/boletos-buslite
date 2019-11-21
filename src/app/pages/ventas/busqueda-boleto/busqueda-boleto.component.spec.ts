import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaBoletoComponent } from './busqueda-boleto.component';

describe('BusquedaBoletoComponent', () => {
  let component: BusquedaBoletoComponent;
  let fixture: ComponentFixture<BusquedaBoletoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaBoletoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaBoletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
