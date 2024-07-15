import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormlyFormFieldModule } from '@ngx-formly/primeng/form-field';
import { FormlyFieldSelectButton } from './select-button.type';

@NgModule({
  declarations: [FormlyFieldSelectButton],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectButtonModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'select-button',
          component: FormlyFieldSelectButton,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlySelectButtonModule {}
