import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyFormFieldModule } from '@ngx-formly/primeng/form-field';
import { FormlyFieldColorPicker } from './colorpicker.type';
import { ColorPickerModule } from 'primeng/colorpicker';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [FormlyFieldColorPicker],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ColorPickerModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'colorpicker',
          component: FormlyFieldColorPicker,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyColorPickerModule {}
