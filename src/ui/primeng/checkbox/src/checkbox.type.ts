import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';

interface CheckboxProps extends FormlyFieldProps {
  value?: any;
  name?: string;
  binary?: boolean;
  ariaLabelledBy?: string;
  ariaLabel?: string;
  tabindex?: number;
  inputId?: string;
  style?: object;
  styleClass?: string;
  labelStyleClass?: string;
  checkboxIcon?: string;
  autofocus?: boolean;
  trueValue?: any;
  falseValue?: any;
  variant?: 'outlined' | 'filled';
}

export interface FormlyCheckboxFieldConfig extends FormlyFieldConfig<CheckboxProps> {
  type: 'checkbox' | Type<FormlyFieldCheckbox>;
}

@Component({
  selector: 'formly-field-primeng-checkbox',
  templateUrl: './checkbox.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldCheckbox extends FieldType<FieldTypeConfig<CheckboxProps>> {
  override defaultOptions = {
    props: {
      hideLabel: true,
    },
  };
}
