import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressNotificationComponent } from './address-notification.component';

describe('AddressNotificationComponent', () => {
  let component: AddressNotificationComponent;
  let fixture: ComponentFixture<AddressNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
