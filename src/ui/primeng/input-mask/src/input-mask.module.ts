import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { FormlyFormFieldModule } from '@ngx-formly/primeng/form-field';
import { FormlyFieldInputMask } from './input-mask.type';

@NgModule({
  declarations: [FormlyFieldInputMask],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyFormFieldModule,
    InputMaskModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'input-mask',
          component: FormlyFieldInputMask,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyInputMaskModule {}
