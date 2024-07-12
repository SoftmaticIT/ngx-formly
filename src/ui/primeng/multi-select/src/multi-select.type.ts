import { Component, ChangeDetectionStrategy, Type, TemplateRef, Inject, LOCALE_ID } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';
import { OverlayOptions, ScrollerOptions } from 'primeng/api';
import { FormlyAttributeEvent } from 'src/core/src/lib/models';

interface MultiSelectProps extends FormlyFieldProps {
  id?: string;
  ariaLabel?: string;
  style?: object;
  styleClass?: string;
  panelStyle?: any;
  panelStyleClass?: string;
  inputId?: string;
  group?: boolean;
  filter?: boolean;
  filterPlaceHolder?: string;
  filterLocale?: string;
  overlayVisible?: boolean;
  tabindex?: number;
  variant?: 'outlined' | 'filled';
  appendTo?: any;
  dataKey?: string;
  name?: string;
  ariaLabelledBy?: string;
  displaySelectedLabel?: boolean;
  maxSelectedLabels?: number;
  selectionLimit?: number;
  selectedItemsLabel?: string;
  showToggleAll?: boolean;
  emptyFilterMessage?: string;
  emptyMessage?: string;
  resetFilterOnHide?: boolean;
  dropdownIcon?: string;
  optionLabel?: string;
  optionValue?: string;
  optionDisabled?: string;
  optionGroupLabel?: string;
  optionGroupChildren?: string;
  showHeader?: boolean;
  filterBy?: string;
  scrollHeight?: string;
  lazy?: boolean;
  virtualScroll?: boolean;
  loading?: boolean;
  virtualScrollItemSize?: number;
  loadingIcon?: string;
  virtualScrollOptions?: ScrollerOptions;
  overlayOptions?: OverlayOptions;
  ariaFilterLabel?: string;
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
  tooltip?: string;
  tooltipPosition?: 'left' | 'top' | 'bottom' | 'right';
  tooltipPositionStyle?: string;
  tooltipStyleClass?: string;
  autofocusFilter?: boolean;
  display?: string;
  autocomplete?: string;
  showClear?: boolean;
  autofocus?: boolean;
  autoZIndex?: boolean;
  baseZIndex?: number;
  showTransitionOptions?: string;
  hideTransitionOptions?: string;
  defaultLabel?: string;
  filterValue?: string;
  itemSize?: number;
  selectAll?: boolean;
  focusOnHover?: boolean;
  filterFields?: any[];
  selectOnFocus?: boolean;
  autoOptionFocus?: boolean;
  onFilter?: FormlyAttributeEvent;
  click?: FormlyAttributeEvent;
  clear?: FormlyAttributeEvent;
  panelShow?: FormlyAttributeEvent;
  panelHide?: FormlyAttributeEvent;
  lazyLoad?: FormlyAttributeEvent;
  remove?: FormlyAttributeEvent;
  selectAllChange?: FormlyAttributeEvent;
  itemTemplate?: TemplateRef<any>;
  selectedItemsTemplate?: TemplateRef<any>;
  headerTemplate?: TemplateRef<any>;
  filterTemplate?: TemplateRef<any>;
  footerTemplate?: TemplateRef<any>;
  emptyFilterTemplate?: TemplateRef<any>;
  emptyTemplate?: TemplateRef<any>;
  groupTemplate?: TemplateRef<any>;
  loaderTemplate?: TemplateRef<any>;
  dropdownIconTemplate?: TemplateRef<any>;
  clearIconTemplate?: TemplateRef<any>;
  filterIconTemplate?: TemplateRef<any>;
  checkIconTemplate?: TemplateRef<any>;
  headerCheckboxIconTemplate?: TemplateRef<any>;
  itemCheckboxIconTemplate?: TemplateRef<any>;
  closeIconTemplate?: TemplateRef<any>;
  removeTokenIconTemplate?: TemplateRef<any>;
}

export interface FormlyMultiSelectFieldConfig extends FormlyFieldConfig<MultiSelectProps> {
  type: 'multi-select' | Type<FormlyFieldMultiSelect>;
}

@Component({
  selector: 'formly-field-primeng-multi-select',
  templateUrl: './multi-select.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldMultiSelect extends FieldType<FieldTypeConfig<MultiSelectProps>> {
  constructor(@Inject(LOCALE_ID) public readonly locale: string) {
    super();
  }
}
