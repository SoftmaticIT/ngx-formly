import { Component, ChangeDetectionStrategy, Type, Inject, LOCALE_ID, ElementRef, TemplateRef } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';
import { ScrollerOptions, OverlayOptions } from 'primeng/api';
import { FormlyAttributeEvent } from 'src/core/src/lib/models';

interface DropdownProps extends FormlyFieldProps {
  id?: string;
  scrollHeight?: string;
  filter?: boolean;
  name?: string;
  style?: object;
  panelStyle?: object;
  styleClass?: string;
  panelStyleClass?: string;
  readonly?: boolean;
  editable?: boolean;
  appendTo?: any;
  tabindex?: number;
  loadingIcon?: string;
  filterPlaceholder?: string;
  filterLocale?: string;
  variant?: 'outlined' | 'filled';
  inputId?: string;
  dataKey?: string;
  filterBy?: string;
  filterFields?: any[];
  autofocus?: boolean;
  resetFilterOnHide?: boolean;
  checkmark?: boolean;
  dropdownIcon?: string;
  loading?: boolean;
  optionLabel?: string;
  optionValue?: string;
  optionDisabled?: string;
  optionGroupLabel?: string;
  optionGroupChildren?: string;
  autoDisplayFirst?: boolean;
  group?: boolean;
  showClear?: boolean;
  emptyFilterMessage?: string;
  emptyMessage?: string;
  lazy?: boolean;
  virtualScroll?: boolean;
  virtualScrollItemSize?: number;
  virtualScrollOptions?: ScrollerOptions;
  overlayOptions?: OverlayOptions;
  ariaFilterLabel?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  filterMatchMode?:
    | 'endsWith'
    | 'startsWith'
    | 'contains'
    | 'equals'
    | 'notEquals'
    | 'in'
    | 'lt'
    | 'lte'
    | 'gt'
    | 'gte';
  maxlength?: number;
  tooltip?: string;
  tooltipPosition?: 'left' | 'top' | 'bottom' | 'right';
  tooltipPositionStyle?: string;
  tooltipStyleClass?: string;
  focusOnHover?: boolean;
  selectOnFocus?: boolean;
  autoOptionFocus?: boolean;
  autofocusFilter?: boolean;
  itemSize?: number;
  autoZIndex?: boolean;
  baseZIndex?: number;
  showTransitionOptions?: string;
  hideTransitionOptions?: string;
  filterValue?: string;
  options?: any[];
  search?: FormlyAttributeEvent;
  show?: FormlyAttributeEvent;
  hide?: FormlyAttributeEvent;
  clear?: FormlyAttributeEvent;
  lazyLoad?: FormlyAttributeEvent;
  selectedItemTemplate?: TemplateRef<any>;
  itemsTemplate?: TemplateRef<any>;
  filterTemplate?: TemplateRef<any>;
}

export interface FormlyDropdownFieldConfig extends FormlyFieldConfig<DropdownProps> {
  type: 'dropdown' | Type<FormlyFieldDropdown>;
}

@Component({
  selector: 'formly-field-primeng-dropdown',
  templateUrl: './dropdown.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldDropdown extends FieldType<FieldTypeConfig<DropdownProps>> {
  constructor(@Inject(LOCALE_ID) public readonly locale: string) {
    super();
  }

  console = console;
}
