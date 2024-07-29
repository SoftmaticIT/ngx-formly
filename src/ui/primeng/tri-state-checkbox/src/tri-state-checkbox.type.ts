import { Component, ChangeDetectionStrategy, Type, TemplateRef } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';
import { FormlyAttributeEvent } from 'src/core/src/lib/models';

interface TriStateCheckboxProps extends FormlyFieldProps {
  name?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  variant?: 'outlined' | 'filled';
  tabindex?: number;
  inputId?: string;
  style?: Object;
  styleClass?: string;
  label?: string;
  checkboxTrueIcon?: string;
  checkboxFalseIcon?: string;
  autofocus?: boolean;
  onChange?: FormlyAttributeEvent;
  checkIconTemplate?: TemplateRef<any>;
  uncheckIconTemplate?: TemplateRef<any>;
}

export interface FormlyTriStateCheckboxFieldConfig extends FormlyFieldConfig<TriStateCheckboxProps> {
  type: 'tri-state-checkbox' | Type<FormlyFieldTriStateCheckbox>;
}

@Component({
  selector: 'formly-field-primeng-tri-state-checkbox',
  templateUrl: './tri-state-checkbox.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldTriStateCheckbox extends FieldType<FieldTypeConfig<TriStateCheckboxProps>> {}
