import { Component, ChangeDetectionStrategy, Type, TemplateRef } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';
import { FormlyAttributeEvent } from 'src/core/src/lib/models';

interface SelectButtonProps extends FormlyFieldProps {
  options?: any[];
  optionLabel?: string;
  optionValue?: string;
  optionDisabled?: string;
  unselectable?: boolean;
  tabindex?: number;
  multiple?: boolean;
  allowEmpty?: boolean;
  style?: any;
  styleClass?: string;
  ariaLabelledBy?: string;
  disabled?: boolean;
  dataKey?: string;
  autofocus?: boolean;
  optionClick?: FormlyAttributeEvent;
  itemTemplate?: TemplateRef<any>;
}

export interface FormlySelectButtonFieldConfig extends FormlyFieldConfig<SelectButtonProps> {
  type: 'select-button' | Type<FormlyFieldSelectButton>;
}

@Component({
  selector: 'formly-field-primeng-select-button',
  templateUrl: './select-button.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldSelectButton extends FieldType<FieldTypeConfig<SelectButtonProps>> {}
