import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';

interface InputSwitchProps extends FormlyFieldProps {
  style?: any;
  styleClass?: string;
  tabindex?: number;
  inputId?: string;
  name?: string;
  trueValue?: any;
  falseValue?: any;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  autofocus?: boolean;
}

export interface FormlyInputSwitchFieldConfig extends FormlyFieldConfig<InputSwitchProps> {
  type: 'input-switch' | Type<FormlyFieldInputSwitch>;
}

@Component({
  selector: 'formly-field-primeng-input-switch',
  templateUrl: './input-switch.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldInputSwitch extends FieldType<FieldTypeConfig<InputSwitchProps>> {}
