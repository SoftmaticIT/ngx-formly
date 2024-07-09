import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyFormFieldModule } from '@ngx-formly/primeng/form-field';
import { FormlyFieldDropdown } from './dropdown.type';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [FormlyFieldDropdown],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'dropdown',
          component: FormlyFieldDropdown,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyDropdownModule {}
