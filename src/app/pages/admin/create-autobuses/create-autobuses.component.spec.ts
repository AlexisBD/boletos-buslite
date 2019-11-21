import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAutobusesComponent } from './create-autobuses.component';

describe('CreateAutobusesComponent', () => {
  let component: CreateAutobusesComponent;
  let fixture: ComponentFixture<CreateAutobusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAutobusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAutobusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
