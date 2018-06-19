import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReduxFormsComponent } from './redux-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { AppState } from './app.state';
import { formReducer } from './form.reducer';
import { MyInputModule } from '../my-input/my-input.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgReduxModule,
    MyInputModule,
  ],
  declarations: [ReduxFormsComponent],
  exports: [ReduxFormsComponent]
})
export class ReduxFormsModule {
  constructor(private store: NgRedux<AppState>) {
    this.configureStore();
  }

  configureStore() {
    const initialState: AppState = {
      data: {
        value: null
      }
    };

    this.store.configureStore(formReducer, initialState);
    this.store.select('data')
        // .debounceTime(100)
        .subscribe(values => {
          console.log('data', values);
        });
  }

}
