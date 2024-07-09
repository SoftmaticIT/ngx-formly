import { Component, ChangeDetectionStrategy, Type, TemplateRef } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';
import { FormlyAttributeEvent } from 'src/core/src/lib/models';

interface ChipsProps extends FormlyFieldProps {
  style?: object;
  styleClass?: string;
  field?: string;
  placeholder?: string;
  max?: number;
  maxLength?: number;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  tabindex?: number;
  inputId?: string;
  allowDuplicate?: boolean;
  caseSensitiveDuplication?: boolean;
  inputStyle?: object;
  inputStyleClass?: string;
  addOnTab?: boolean;
  addOnBlur?: boolean;
  separator?: string | RegExp;
  showClear?: boolean;
  autofocus?: boolean;
  variant?: 'outlined' | 'filled';
  add?: FormlyAttributeEvent;
  remove?: FormlyAttributeEvent;
  clear?: FormlyAttributeEvent;
  itemTemplate?: TemplateRef<any>;
  removeTokenIconTemplate?: TemplateRef<any>;
  clearIconTemplate?: TemplateRef<any>;
}

export interface FormlyChipsFieldConfig extends FormlyFieldConfig<ChipsProps> {
  type: 'chips' | Type<FormlyFieldChips>;
}

@Component({
  selector: 'formly-field-primeng-chips',
  templateUrl: './chips.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldChips extends FieldType<FieldTypeConfig<ChipsProps>> {}
