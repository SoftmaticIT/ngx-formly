import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { FormlyFormFieldModule } from '@ngx-formly/primeng/form-field';
import { FormlyFieldCascadeSelect } from './cascade-select.type';

@NgModule({
  declarations: [FormlyFieldCascadeSelect],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CascadeSelectModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'cascade-select',
          component: FormlyFieldCascadeSelect,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyCascadeSelectModule {}
