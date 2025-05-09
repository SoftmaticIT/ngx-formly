import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormlyFormFieldModule } from '@ngx-formly/primeng/form-field';
import { FormlyFieldInputSwitch } from './input-switch.type';

@NgModule({
  declarations: [FormlyFieldInputSwitch],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputSwitchModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'input-switch',
          component: FormlyFieldInputSwitch,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyInputSwitchModule {}
