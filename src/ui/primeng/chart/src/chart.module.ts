import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { FormlyFormFieldModule } from '@ngx-formly/primeng/form-field';
import { FormlyFieldChart } from './chart.type';

@NgModule({
  declarations: [FormlyFieldChart],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChartModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'chart',
          component: FormlyFieldChart,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyChartModule {}
