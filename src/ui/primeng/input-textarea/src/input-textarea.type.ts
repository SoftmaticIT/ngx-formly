import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';
import { FormlyAttributeEvent } from 'src/core/src/lib/models';

interface InputTextareaProps extends FormlyFieldProps {
  autoResize?: boolean;
  variant?: 'outlined' | 'filled';
  resize?: FormlyAttributeEvent;
}

export interface FormlyInputTextareaFieldConfig extends FormlyFieldConfig<InputTextareaProps> {
  type: 'input-textarea' | Type<FormlyFieldInputTextarea>;
}

@Component({
  selector: 'formly-field-primeng-input-textarea',
  templateUrl: './input-textarea.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldInputTextarea extends FieldType<FieldTypeConfig<InputTextareaProps>> {}
