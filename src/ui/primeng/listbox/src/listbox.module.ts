import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { FormlyFormFieldModule } from '@ngx-formly/primeng/form-field';
import { FormlyFieldListbox } from './listbox.type';

@NgModule({
  declarations: [FormlyFieldListbox],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ListboxModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'listbox',
          component: FormlyFieldListbox,
        },
      ],
    }),
  ],
})
export class FormlyListboxModule {}
