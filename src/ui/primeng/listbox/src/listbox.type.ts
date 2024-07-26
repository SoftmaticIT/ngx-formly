import { Component, ChangeDetectionStrategy, Type, TemplateRef, Inject, LOCALE_ID } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';
import { ScrollerOptions } from 'primeng/api';
import { FormlyAttributeEvent } from 'src/core/src/lib/models';

interface ListboxProps extends FormlyFieldProps {
  id?: string;
  searchMessage?: string;
  emptySelectionMessage?: string;
  selectionMessage?: string;
  autoOptionFocus?: boolean;
  ariaLabel?: string;
  selectOnFocus?: boolean;
  searchLocale?: boolean;
  focusOnHover?: boolean;
  filterMessage?: string;
  filterFields?: any[];
  lazy?: boolean;
  virtualScroll?: boolean;
  virtualScrollItemSize?: number;
  virtualScrollOptions?: ScrollerOptions;
  scrollHeight?: string;
  tabindex?: number;
  multiple?: boolean;
  style?: Object;
  styleClass?: string;
  listStyle?: Object;
  listStyleClass?: string;
  checkbox?: boolean;
  filter?: boolean;
  filterBy?: string;
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
  filterLocale?: string;
  metaKeySelection?: boolean;
  dataKey?: string;
  showToggleAll?: boolean;
  optionLabel?: string;
  optionValue?: string;
  optionGroupChildren?: string;
  optionGroupLabel?: string;
  optionDisabled?: string;
  ariaFilterLabel?: string;
  filterPlaceHolder?: string;
  emptyFilterMessage?: string;
  emptyMessage?: string;
  group?: boolean;
  filterValue?: string;
  selectAll?: boolean;
  onChange?: FormlyAttributeEvent;
  onClick?: FormlyAttributeEvent;
  onDblClick?: FormlyAttributeEvent;
  onFilter?: FormlyAttributeEvent;
  onFocus?: FormlyAttributeEvent;
  onBlur?: FormlyAttributeEvent;
  onSelectAllChange?: FormlyAttributeEvent;
  itemTemplate?: TemplateRef<any>;
  groupTemplate?: TemplateRef<any>;
  headerTemplate?: TemplateRef<any>;
  filterTemplate?: TemplateRef<any>;
  footerTemplate?: TemplateRef<any>;
  emptyTemplate?: TemplateRef<any>;
  emptyFilterTemplate?: TemplateRef<any>;
  filterIconTemplate?: TemplateRef<any>;
  checkIconTemplate?: TemplateRef<any>;
}

export interface FormlyListboxFieldConfig extends FormlyFieldConfig<ListboxProps> {
  type: 'listbox' | Type<FormlyFieldListbox>;
}

@Component({
  selector: 'formly-field-primeng-listbox',
  templateUrl: './listbox.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldListbox extends FieldType<FieldTypeConfig<ListboxProps>> {
  constructor(@Inject(LOCALE_ID) public readonly locale: string) {
    super();
  }
}
