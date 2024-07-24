import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';
import { FormlyAttributeEvent } from 'src/core/src/lib/models';

interface ChartProps extends FormlyFieldProps {
  type?: 'bar' | 'line' | 'scatter' | 'bubble' | 'pie' | 'doughnut' | 'polarArea' | 'radar';
  plugins?: any[];
  width?: string;
  height?: string;
  responsive?: boolean;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  data?: any;
  chartOptions?: any;
  dataSelect?: FormlyAttributeEvent;
}

export interface FormlyChartFieldConfig extends FormlyFieldConfig<ChartProps> {
  type: 'chart' | Type<FormlyFieldChart>;
}

@Component({
  selector: 'formly-field-primeng-chart',
  templateUrl: './chart.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldChart extends FieldType<FieldTypeConfig<ChartProps>> {}
