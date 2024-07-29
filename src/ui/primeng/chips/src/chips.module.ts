import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyFormFieldModule } from '@ngx-formly/primeng/form-field';
import { FormlyFieldChips } from './chips.type';
import { ChipsModule } from 'primeng/chips';

@NgModule({
  declarations: [FormlyFieldChips],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChipsModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'chips',
          component: FormlyFieldChips,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyChipsModule {}
