import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAutobusesComponent } from './update-autobuses.component';

describe('UpdateAutobusesComponent', () => {
  let component: UpdateAutobusesComponent;
  let fixture: ComponentFixture<UpdateAutobusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAutobusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAutobusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
