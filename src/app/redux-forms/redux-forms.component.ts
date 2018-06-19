import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup } from '@angular/forms';
import { AppState } from './app.state';

@Component({
  selector: 'app-redux-forms',
  templateUrl: './redux-forms.component.html',
  styleUrls: ['./redux-forms.component.css']
})
export class ReduxFormsComponent implements OnInit, OnDestroy {
  public modelForm: FormGroup;

  private dataStoreSubscription: Subscription;
  private dataValueChangesSubscription: Subscription;

  constructor(private store: NgRedux<AppState>) { }

  ngOnInit() {
    this.syncFromStore();
    this.syncToStore();
  }

  ngOnDestroy () {
    this.dataStoreSubscription.unsubscribe();
    this.dataValueChangesSubscription.unsubscribe();
  }

  private syncFromStore() {
    if (this.dataStoreSubscription !== undefined) {
      return;
    }

    this.dataStoreSubscription =
      this.store.select('data')
        .subscribe(values => {
          this.modelForm.patchValue(values);
        });
  }

  private syncToStore() {
    if (this.dataValueChangesSubscription !== undefined) {
      return;
    }

    this.dataValueChangesSubscription =
      this.modelForm.valueChanges
        // .debounceTime(250)
        .subscribe(values => {
          this.store.dispatch({
            type: 'UPDATE_DATA',
            payload: values,
          });
        });
  }
}
