import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { FormlyFormFieldModule } from '@ngx-formly/primeng/form-field';
import { FormlyFieldTriStateCheckbox } from './tri-state-checkbox.type';

@NgModule({
  declarations: [FormlyFieldTriStateCheckbox],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TriStateCheckboxModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'tri-state-checkbox',
          component: FormlyFieldTriStateCheckbox,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyTriStateCheckboxModule {}
