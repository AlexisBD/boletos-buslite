import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoBusquedaBoletoComponent } from './resultado-busqueda-boleto.component';

describe('ResultadoBusquedaBoletoComponent', () => {
  let component: ResultadoBusquedaBoletoComponent;
  let fixture: ComponentFixture<ResultadoBusquedaBoletoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoBusquedaBoletoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoBusquedaBoletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
