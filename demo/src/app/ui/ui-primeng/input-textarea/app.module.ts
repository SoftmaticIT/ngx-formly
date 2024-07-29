import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { AppComponent } from './app.component';
import { FormlyInputTextareaModule } from '@ngx-formly/ui/primeng/input-textarea';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [{ name: 'required', message: 'This field is required' }],
    }),
    FormlyInputTextareaModule,
  ],
  declarations: [AppComponent],
})
export class AppModule {}
