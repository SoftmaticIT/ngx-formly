import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TreeSelectModule } from 'primeng/treeselect';
import { FormlyFormFieldModule } from '@ngx-formly/primeng/form-field';
import { FormlyFieldTreeSelect } from './tree-select.type';

@NgModule({
  declarations: [FormlyFieldTreeSelect],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TreeSelectModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'tree-select',
          component: FormlyFieldTreeSelect,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyTreeSelectModule {}
