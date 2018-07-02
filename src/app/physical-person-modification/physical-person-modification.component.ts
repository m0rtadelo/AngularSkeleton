import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MyBaseProcess } from '../my-base-process.component';
import { GetPhysicalPersonService } from '../get-physical-person.service';

@Component({
  selector: 'app-physical-person-modification',
  templateUrl: './physical-person-modification.component.html',
  styleUrls: ['./physical-person-modification.component.css']
})
export class PhysicalPersonModificationComponent extends MyBaseProcess implements OnInit, AfterViewInit {
  private especial = false;
  constructor(private physicalPersonService: GetPhysicalPersonService ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.modelForm = new FormGroup({
      personalData: new FormGroup({}),
      addressNotification: new FormGroup({})
    });
  }

  ngAfterViewInit(): void {
    this.loadModel();
  }

  public loadModel(): void {
    this.physicalPersonService.load().subscribe(data => {
      Object.keys(this.modelForm.controls).forEach(model => {
        this.modelForm.get(model).patchValue(data.data.infoPfs);
      });
      this.modelOriginal = this.modelForm.getRawValue();
      this.untouch();
    });
  }
}
