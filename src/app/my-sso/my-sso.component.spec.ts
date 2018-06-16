import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySsoComponent } from './my-sso.component';

describe('MySsoComponent', () => {
  let component: MySsoComponent;
  let fixture: ComponentFixture<MySsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
