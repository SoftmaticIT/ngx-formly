import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';
import { OverlayOptions, ScrollerOptions } from 'primeng/api';
import {
  AutoCompleteCompleteEvent,
  AutoCompleteDropdownClickEvent,
  AutoCompleteLazyLoadEvent,
  AutoCompleteSelectEvent,
  AutoCompleteUnselectEvent,
} from 'primeng/autocomplete';

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
  completeMethod?: (field: FormlyFieldConfig, event: AutoCompleteCompleteEvent) => void;
  onSelect?: (field: FormlyFieldConfig, event: AutoCompleteSelectEvent) => void;
  onUnselect?: (field: FormlyFieldConfig, event: AutoCompleteUnselectEvent) => void;
  onFocus?: (field: FormlyFieldConfig, event: Event) => void;
  onBlur?: (field: FormlyFieldConfig, event: Event) => void;
  onDropdownClick?: (field: FormlyFieldConfig, event: AutoCompleteDropdownClickEvent) => void;
  onClear?: (field: FormlyFieldConfig, event: Event) => void;
  onKeyUp?: (field: FormlyFieldConfig, event: KeyboardEvent) => void;
  onShow?: (field: FormlyFieldConfig, event: Event) => void;
  onHide?: (field: FormlyFieldConfig, event: Event) => void;
  onLazyLoad?: (field: FormlyFieldConfig, event: AutoCompleteLazyLoadEvent) => void;
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
