import { Component, ChangeDetectionStrategy, Type, TemplateRef } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';
import { OverlayOptions, ScrollerOptions, TreeNode } from 'primeng/api';
import { FormlyAttributeEvent } from 'src/core/src/lib/models';

interface TreeSelectProps extends FormlyFieldProps {
  inputId?: string;
  scrollHeight?: string;
  metaKeySelection?: boolean;
  variant?: 'outlined' | 'filled';
  display?: 'comma' | 'chip';
  selectionMode?: 'multiple' | 'checkbox' | 'single';
  ariaLabel?: string;
  ariaLabelledBy?: string;
  placeholder?: string;
  panelClass?: string | string[] | Set<string> | Object;
  panelStyle?: Object;
  panelStyleClass?: string;
  containerStyle?: Object;
  containerStyleClass?: string;
  labelStyle?: Object;
  labelStyleClass?: string;
  overlayOptions?: OverlayOptions;
  emptyMessage?: string;
  appendTo?: any;
  filter?: boolean;
  filterBy?: string;
  filterMode?: string;
  filterPlaceholder?: string;
  filterLocale?: string;
  filterInputAutoFocus?: boolean;
  propagateSelectionDown?: boolean;
  propagateSelectionUp?: boolean;
  showClear?: boolean;
  resetFilterOnHide?: boolean;
  virtualScroll?: boolean;
  virtualScrollItemSize?: number;
  virtualScrollOptions?: ScrollerOptions;
  autofocus?: boolean;
  options?: TreeNode<any>[];
  showTransitionOptions?: string;
  hideTransitionOptions?: string;
  loading?: boolean;
  onNodeExpand?: FormlyAttributeEvent;
  onNodeCollapse?: FormlyAttributeEvent;
  onShow?: FormlyAttributeEvent;
  onHide?: FormlyAttributeEvent;
  onClear?: FormlyAttributeEvent;
  onFilter?: FormlyAttributeEvent;
  onFocus?: FormlyAttributeEvent;
  onBlur?: FormlyAttributeEvent;
  onNodeUnselect?: FormlyAttributeEvent;
  onNodeSelect?: FormlyAttributeEvent;
  valueTemplate?: TemplateRef<any>;
  headerTemplate?: TemplateRef<any>;
  emptyTemplate?: TemplateRef<any>;
  footerTemplate?: TemplateRef<any>;
  clearIconTemplate?: TemplateRef<any>;
  triggerIconTemplate?: TemplateRef<any>;
  filterIconTemplate?: TemplateRef<any>;
  closeIconTemplate?: TemplateRef<any>;
  itemTogglerIconTemplate?: TemplateRef<any>;
  itemCheckboxIconTemplate?: TemplateRef<any>;
  itemLoadingIconTemplate?: TemplateRef<any>;
}

export interface FormlyTreeSelectFieldConfig extends FormlyFieldConfig<TreeSelectProps> {
  type: 'tree-select' | Type<FormlyFieldTreeSelect>;
}

@Component({
  selector: 'formly-field-primeng-tree-select',
  templateUrl: './tree-select.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldTreeSelect extends FieldType<FieldTypeConfig<TreeSelectProps>> {}
