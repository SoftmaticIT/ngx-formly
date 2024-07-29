import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';
import { FormlyAttributeEvent } from 'src/core/src/lib/models';

interface KnobProps extends FormlyFieldProps {
  styleClass?: string;
  style?: object;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  tabindex?: number;
  valueColor?: string;
  rangeColor?: string;
  textColor?: string;
  valueTemplate?: string;
  name?: string;
  size?: number;
  step?: number;
  min?: number;
  max?: number;
  strokeWidth?: number;
  showValue?: boolean;
  onChange?: FormlyAttributeEvent;
}

export interface FormlyKnobFieldConfig extends FormlyFieldConfig<KnobProps> {
  type: 'knob' | Type<FormlyFieldKnob>;
}

@Component({
  selector: 'formly-field-primeng-knob',
  templateUrl: './knob.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldKnob extends FieldType<FieldTypeConfig<KnobProps>> {}
