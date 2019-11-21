import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAutobusesComponent } from './get-autobuses.component';

describe('GetAutobusesComponent', () => {
  let component: GetAutobusesComponent;
  let fixture: ComponentFixture<GetAutobusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAutobusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAutobusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
