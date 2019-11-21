import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservacionAsientoComponent } from './reservacion-asiento.component';

describe('ReservacionAsientoComponent', () => {
  let component: ReservacionAsientoComponent;
  let fixture: ComponentFixture<ReservacionAsientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservacionAsientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservacionAsientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
