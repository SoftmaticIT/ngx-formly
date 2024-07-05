import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';
import { OverlayOptions } from 'primeng/api';
import { FormlyAttributeEvent } from 'src/core/src/lib/models';

interface CascadeSelectProps extends FormlyFieldProps {
  id?: string;
  selectOnFocus?: boolean;
  searchMessage?: string;
  emptyMessage?: string;
  selectionMessage?: string;
  emptySearchMessage?: string;
  emptySelectionMessage?: string;
  searchLocale?: string;
  optionDisabled?: any;
  autoOptionFocus?: boolean;
  styleClass?: string;
  style?: object;
  optionLabel?: string;
  optionValue?: string;
  optionGroupLabel?: string[] | string;
  optionGroupChildren?: string[] | string;
  value?: string;
  dataKey?: string;
  inputId?: string;
  ariaLabelledBy?: string;
  inputLabel?: string;
  ariaLabel?: string;
  appendTo?: any;
  showClear?: boolean;
  panelStyleClass?: string;
  panelStyle?: object;
  overlayOptions?: OverlayOptions;
  autofocus?: boolean;
  showTransitionOptions?: string;
  variant?: 'outlined' | 'filled';
  loading?: boolean;
  loadingIcon?: string;
  hideTransitionOptions?: string;
  groupChange?: FormlyAttributeEvent;
  show?: FormlyAttributeEvent;
  hide?: FormlyAttributeEvent;
  clear?: FormlyAttributeEvent;
  beforeShow?: FormlyAttributeEvent;
  beforeHide?: FormlyAttributeEvent;
}

export interface FormlyCascadeSelectFieldConfig extends FormlyFieldConfig<CascadeSelectProps> {
  type: 'cascade-select' | Type<FormlyFieldCascadeSelect>;
}

@Component({
  selector: 'formly-field-primeng-cascade-select',
  templateUrl: './cascade-select.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldCascadeSelect extends FieldType<FieldTypeConfig<CascadeSelectProps>> {}
