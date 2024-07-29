import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyFormFieldModule } from '@ngx-formly/primeng/form-field';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormlyFieldInputTextarea } from './input-textarea.type';

@NgModule({
  declarations: [FormlyFieldInputTextarea],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextareaModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'input-textarea',
          component: FormlyFieldInputTextarea,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyInputTextareaModule {}
