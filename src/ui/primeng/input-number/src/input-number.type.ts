import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';
import { InputNumberInputEvent } from 'primeng/inputnumber';

interface InputNumberProps extends FormlyFieldProps {
  showButtons?: boolean;
  format?: boolean;
  buttonLayout?: 'stacked' | 'horizontal' | 'vertical';
  inputId?: string;
  styleClass?: string;
  style?: object;
  title?: string;
  ariaLabelledBy?: string;
  ariaLabel?: string;
  ariaRequired?: boolean;
  name?: string;
  autocomplete?: string;
  incrementButtonClass?: string;
  decrementButtonClass?: string;
  incrementButtonIcon?: string;
  decrementButtonIcon?: string;
  clearicon?: string;
  cleariconSize?: string;
  cleariconColor?: string;
  allowEmpty?: boolean;
  locale?: string;
  localeMatcher?: 'lookup' | 'best fit';
  mode?: 'decimal' | 'currency';
  currency?: string;
  currencyDisplay?: 'symbol' | 'code' | 'name';
  useGrouping?: boolean;
  variant?: 'outlined' | 'filled';
  minFractionDigits?: number;
  maxFractionDigits?: number;
  prefix?: string;
  suffix?: string;
  inputStyle?: any;
  inputStyleClass?: string;
  showClear?: boolean;
  autofocus?: boolean;
  onInput: (event: InputNumberInputEvent) => void;
  onClear: (event: void) => void;
}

export interface FormlyInputNumberFieldConfig extends FormlyFieldConfig<InputNumberProps> {
  type: 'input-number' | Type<FormlyFieldInputNumber>;
}

@Component({
  selector: 'formly-field-primeng-autocomplete',
  templateUrl: './input-number.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldInputNumber extends FieldType<FieldTypeConfig<InputNumberProps>> {}
