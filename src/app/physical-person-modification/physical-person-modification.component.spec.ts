import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalPersonModificationComponent } from './physical-person-modification.component';

describe('PhysicalPersonModificationComponent', () => {
  let component: PhysicalPersonModificationComponent;
  let fixture: ComponentFixture<PhysicalPersonModificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalPersonModificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalPersonModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
