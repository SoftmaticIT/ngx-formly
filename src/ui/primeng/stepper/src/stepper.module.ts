import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StepperModule } from 'primeng/stepper';
import { FormlyFormFieldModule } from '@ngx-formly/primeng/form-field';
import { FormlyFieldStepper } from './stepper.type';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [FormlyFieldStepper],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StepperModule,
    FormlyFormFieldModule,
    ButtonModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'stepper',
          component: FormlyFieldStepper,
        },
      ],
    }),
  ],
})
export class FormlyStepperModule {}
