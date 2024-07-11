import { Component, ChangeDetectionStrategy, Type, TemplateRef } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';

interface InputOtpProps extends FormlyFieldProps {
  invalid?: boolean;
  variant?: 'outlined' | 'filled';
  length?: number;
  mask?: boolean;
  integerOnly?: boolean;
  autofocus?: boolean;
  inputTemplate?: TemplateRef<any>;
}

export interface FormlyInputOtpFieldConfig extends FormlyFieldConfig<InputOtpProps> {
  type: 'input-otp' | Type<FormlyFieldInputOtp>;
}

@Component({
  selector: 'formly-field-primeng-input-otp',
  templateUrl: './input-otp.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldInputOtp extends FieldType<FieldTypeConfig<InputOtpProps>> {}
