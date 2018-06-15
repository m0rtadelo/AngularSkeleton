import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProcessViewComponent } from './my-process-view.component';

describe('MyProcessViewComponent', () => {
  let component: MyProcessViewComponent;
  let fixture: ComponentFixture<MyProcessViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProcessViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProcessViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
