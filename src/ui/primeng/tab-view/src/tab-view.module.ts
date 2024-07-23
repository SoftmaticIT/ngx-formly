import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { FormlyFormFieldModule } from '@ngx-formly/primeng/form-field';
import { FormlyFieldTabView } from './tab-view.type';

@NgModule({
  declarations: [FormlyFieldTabView],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TabViewModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'tab-view',
          component: FormlyFieldTabView,
        },
      ],
    }),
  ],
})
export class FormlyTabViewModule {}
