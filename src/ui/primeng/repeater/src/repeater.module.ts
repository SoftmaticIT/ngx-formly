import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyFormFieldModule } from '@ngx-formly/primeng/form-field';
import { FormlyFieldRepeater } from './repeater.type';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [FormlyFieldRepeater],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyFormFieldModule,
    ButtonModule,
    PanelModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'repeater',
          component: FormlyFieldRepeater,
        },
      ],
    }),
  ],
})
export class FormlyRepeaterModule {}
