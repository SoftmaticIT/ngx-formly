import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';
import { ColorPickerChangeEvent } from 'primeng/colorpicker';

interface ColorPickerProps extends FormlyFieldProps {
  inputStyle?: string;
  showInput?: boolean;
  style?: Object;
  styleClass?: string;
  inline?: boolean;
  format: 'rgb' | 'hex' | 'hsb';
  appendTo?: string;
  tabindex?: any;
  inputId?: string;
  autoZIndex?: boolean;
  showTransitionOptions?: string;
  hideTransitionOptions?: string;
  autofocus?: boolean;
  onChange?: (event: ColorPickerChangeEvent) => void;
  onShow?: (event: any) => void;
  onHide?: (event: any) => void;
}

export interface FormlyColorPickerFieldConfig extends FormlyFieldConfig<ColorPickerProps> {
  type: 'colorpicker' | Type<FormlyFieldColorPicker>;
}

@Component({
  selector: 'formly-field-primeng-colorpicker',
  templateUrl: './colorpicker.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldColorPicker extends FieldType<FieldTypeConfig<ColorPickerProps>> {}
