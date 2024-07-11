import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';

interface InputTextProps extends FormlyFieldProps {
  id?: string;
  variant: 'outlined' | 'filled';
}

export interface FormlyInputTextFieldConfig extends FormlyFieldConfig<InputTextProps> {
  type: 'input-text' | Type<FormlyFieldInputText>;
}

@Component({
  selector: 'formly-field-primeng-input-text',
  templateUrl: './input-text.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldInputText extends FieldType<FieldTypeConfig<InputTextProps>> {}
