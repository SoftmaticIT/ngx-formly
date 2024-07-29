import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';
import { FormlyAttributeEvent } from 'src/core/src/lib/models';

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
  onChange?: FormlyAttributeEvent;
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
