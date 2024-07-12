import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormlyFormFieldModule } from '@ngx-formly/primeng/form-field';
import { FormlyFieldMultiSelect } from './multi-select.type';

@NgModule({
  declarations: [FormlyFieldMultiSelect],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MultiSelectModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'multi-select',
          component: FormlyFieldMultiSelect,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyMultiSelectModule {}
