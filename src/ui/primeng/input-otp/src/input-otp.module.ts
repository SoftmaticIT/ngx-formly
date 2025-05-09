import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputOtpModule } from 'primeng/inputotp';
import { FormlyFormFieldModule } from '@ngx-formly/primeng/form-field';
import { FormlyFieldInputOtp } from './input-otp.type';

@NgModule({
  declarations: [FormlyFieldInputOtp],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputOtpModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'input-otp',
          component: FormlyFieldInputOtp,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyInputOtpModule {}
