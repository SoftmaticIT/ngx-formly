import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { KnobModule } from 'primeng/knob';
import { FormlyFormFieldModule } from '@ngx-formly/primeng/form-field';
import { FormlyFieldKnob } from './knob.type';

@NgModule({
  declarations: [FormlyFieldKnob],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    KnobModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'knob',
          component: FormlyFieldKnob,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyKnobModule {}
