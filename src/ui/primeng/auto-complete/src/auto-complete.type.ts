import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';
import { OverlayOptions, ScrollerOptions } from 'primeng/api';
import { FormlyAttributeEvent } from 'src/core/src/lib/models';

interface AutoCompleteProps extends FormlyFieldProps {
  delay?: number;
  style?: any;
  panelStyle?: any;
  styleClass?: string;
  panelStyleClass?: string;
  inputStyle?: any;
  inputId?: string;
  inputStyleClass?: string;
  placeholder?: string;
  readonly?: boolean;
  disabled?: boolean;
  scrollHeight?: string;
  lazy?: boolean;
  virtualScroll?: boolean;
  virtualScrollItemSize?: number;
  virtualScrollOptions?: ScrollerOptions;
  name?: string;
  size?: number;
  appendTo?: string;
  autoHighlight?: boolean;
  forceSelection?: boolean;
  type?: string;
  autoZIndex?: boolean;
  baseZIndex?: number;
  ariaLabel?: string;
  dropdownAriaLabel?: string;
  ariaLabelledBy?: string;
  dropdownIcon?: string;
  unique?: boolean;
  group?: boolean;
  completeOnFocus?: boolean;
  showClear?: boolean;
  field?: string;
  dropdown?: boolean;
  showEmptyMessage?: boolean;
  dropdownMode?: string;
  multiple?: boolean;
  tabindex?: number;
  dataKey?: string;
  emptyMessage?: string;
  showTransitionOptions?: string;
  hideTransitionOptions?: string;
  autofocus?: boolean;
  autocomplete?: string;
  optionGroupChildren?: string;
  optionGroupLabel?: string;
  overlayOptions?: OverlayOptions;
  suggestions?: any[];
  itemSize?: number;
  optionLabel?: string;
  optionValue?: string;
  id?: string;
  searchMessage?: string;
  emptySelectionMessage?: string;
  selectionMessage?: string;
  autoOptionFocus?: boolean;
  selectOnFocus?: boolean;
  searchLocale?: boolean;
  optionDisabled?: string;
  focusOnHover?: boolean;
  variant?: 'outlined' | 'filled';
  completeMethod?: FormlyAttributeEvent;
  select?: FormlyAttributeEvent;
  unselect?: FormlyAttributeEvent;
  clear?: FormlyAttributeEvent;
  show?: FormlyAttributeEvent;
  hide?: FormlyAttributeEvent;
  lazyLoad?: FormlyAttributeEvent;
}

export interface FormlyAutoCompleteFieldConfig extends FormlyFieldConfig<AutoCompleteProps> {
  type: 'autocomplete' | Type<FormlyFieldAutoComplete>;
}

@Component({
  selector: 'formly-field-primeng-autocomplete',
  templateUrl: './auto-complete.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldAutoComplete extends FieldType<FieldTypeConfig<AutoCompleteProps>> {}
