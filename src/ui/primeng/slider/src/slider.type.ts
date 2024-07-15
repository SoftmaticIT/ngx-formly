import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';
import { FormlyAttributeEvent } from 'src/core/src/lib/models';

interface SliderProps extends FormlyFieldProps {
  animate?: boolean;
  min?: number;
  max?: number;
  orientation?: 'vertical' | 'horizontal';
  step?: number;
  range?: boolean;
  style?: object;
  styleClass?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  tabindex?: number;
  autofocus?: boolean;
  slideEnd?: FormlyAttributeEvent;
}

export interface FormlySliderFieldConfig extends FormlyFieldConfig<SliderProps> {
  type: 'slider' | Type<FormlyFieldSlider>;
}

@Component({
  selector: 'formly-field-primeng-slider',
  templateUrl: './slider.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldSlider extends FieldType<FieldTypeConfig<SliderProps>> {}
