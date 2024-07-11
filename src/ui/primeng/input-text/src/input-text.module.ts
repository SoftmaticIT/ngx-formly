import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyFormFieldModule } from '@ngx-formly/primeng/form-field';
import { FormlyFieldInputText } from './input-text.type';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [FormlyFieldInputText],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'input-text',
          component: FormlyFieldInputText,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyInputTextModule {}
