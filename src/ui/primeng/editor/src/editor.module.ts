import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyFormFieldModule } from '@ngx-formly/primeng/form-field';
import { FormlyFieldEditor } from './editor.type';
import { EditorModule } from 'primeng/editor';

@NgModule({
  declarations: [FormlyFieldEditor],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditorModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'editor',
          component: FormlyFieldEditor,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyEditorModule {}
