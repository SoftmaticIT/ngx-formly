import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormlyFormFieldModule } from '@ngx-formly/primeng/form-field';
import { FormlyFieldInputNumber } from './input-number.type';

@NgModule({
  declarations: [FormlyFieldInputNumber],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputNumberModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'input-number',
          component: FormlyFieldInputNumber,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyInputNumberModule {}
