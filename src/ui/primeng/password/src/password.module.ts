import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { FormlyFormFieldModule } from '@ngx-formly/primeng/form-field';
import { FormlyFieldPassword } from './password.type';

@NgModule({
  declarations: [FormlyFieldPassword],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PasswordModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'password',
          component: FormlyFieldPassword,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyPasswordModule {}
