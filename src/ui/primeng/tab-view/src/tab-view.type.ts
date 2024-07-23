import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';
import { FormlyAttributeEvent } from 'src/core/src/lib/models';

interface TabViewProps extends FormlyFieldProps {
  style?: Object;
  styleClass?: string;
  controlClose?: boolean;
  scrollable?: boolean;
  activeIndex?: number;
  selectOnFocus?: boolean;
  nextButtonAriaLabel?: string;
  prevButtonAriaLabel?: string;
  autoHideButtons?: boolean;
  tabindex?: number;
  close?: FormlyAttributeEvent;
  activeIndexChange?: FormlyAttributeEvent;
}

export interface FormlyTabViewFieldConfig extends FormlyFieldConfig<TabViewProps> {
  type: 'tab-view' | Type<FormlyFieldTabView>;
}

@Component({
  selector: 'formly-field-primeng-tab-view',
  templateUrl: './tab-view.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldTabView extends FieldType<FieldTypeConfig<TabViewProps>> {}
