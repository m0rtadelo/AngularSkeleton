import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduxFormsComponent } from './redux-forms.component';

describe('ReduxFormsComponent', () => {
  let component: ReduxFormsComponent;
  let fixture: ComponentFixture<ReduxFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReduxFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReduxFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
