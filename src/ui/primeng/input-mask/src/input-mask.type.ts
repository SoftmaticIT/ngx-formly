import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';

interface InputMaskProps extends FormlyFieldProps {
  text?: string;
  slotChar?: string;
  autoClear?: boolean;
  showClear?: boolean;
  style?: object;
  inputId?: string;
  styleClass?: string;
  size?: number;
  title?: string;
  variant?: 'outlined' | 'filled';
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaRequired?: boolean;
  unmask?: boolean;
  name?: string;
  characterPattern?: string;
  autofocus?: boolean;
  autoFocus?: any; // Note: Type 'autoFocus' type is unclear, added as 'any' as a placeholder
  autocomplete?: string;
  keepBuffer?: boolean;
  mask?: string;
  clearIcon?: string;
  onComplete: (value: any) => void;
  onFocus: (event: Event) => void;
  onBlur: (event: Event) => void;
  onInput: (event: Event) => void;
  onKeydown: (event: Event) => void;
  onClear: (value: any) => void;
}

export interface FormlyInputMaskFieldConfig extends FormlyFieldConfig<InputMaskProps> {
  type: 'InputMask' | Type<FormlyFieldInputMask>;
}

@Component({
  selector: 'formly-field-primeng-input-mask',
  templateUrl: './input-mask.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldInputMask extends FieldType<FieldTypeConfig<InputMaskProps>> {}
