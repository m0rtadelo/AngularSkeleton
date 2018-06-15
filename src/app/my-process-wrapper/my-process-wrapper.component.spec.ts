import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProcessWrapperComponent } from './my-process-wrapper.component';

describe('MyProcessWrapperComponent', () => {
  let component: MyProcessWrapperComponent;
  let fixture: ComponentFixture<MyProcessWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProcessWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProcessWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
