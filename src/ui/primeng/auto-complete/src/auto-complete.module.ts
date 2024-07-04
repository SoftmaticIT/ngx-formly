import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormlyFormFieldModule } from '@ngx-formly/primeng/form-field';
import { FormlyFieldAutoComplete } from './auto-complete.type';

@NgModule({
  declarations: [FormlyFieldAutoComplete],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'autocomplete',
          component: FormlyFieldAutoComplete,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyAutoCompleteModule {}
