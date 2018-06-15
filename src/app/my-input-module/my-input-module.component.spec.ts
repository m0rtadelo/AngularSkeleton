import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInputModuleComponent } from './my-input-module.component';

describe('MyInputModuleComponent', () => {
  let component: MyInputModuleComponent;
  let fixture: ComponentFixture<MyInputModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyInputModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInputModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
