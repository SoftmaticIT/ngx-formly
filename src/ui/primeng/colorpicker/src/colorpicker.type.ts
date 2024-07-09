import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';
import { ColorPickerChangeEvent } from 'primeng/colorpicker';
import { Subject, takeUntil } from 'rxjs';

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
  onChange?: (currentValue: string) => void;
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
export class FormlyFieldColorPicker extends FieldType<FieldTypeConfig<ColorPickerProps>> {
  private readonly _destroy$: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    if (!this.formControl.value) {
      this.formControl.setValue('#ffffff');
    }

    this.formControl.valueChanges.pipe(takeUntil(this._destroy$)).subscribe((value) => {
      if (!value) {
        this.formControl.setValue('#ffffff');
      } else if (this.props.onChange) {
        this.props.onChange(value);
      }
    });
  }

  onShow(event: any): void {
    if (this.props.onShow) {
      this.props.onShow(event);
    }
  }

  onHide(event: any): void {
    if (this.props.onShow) {
      this.props.onHide(event);
    }
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  handleColorChange(currentValue: string): void {
    this.formControl.setValue(currentValue);
  }

  handleBlur(event: any): void {
    const { value } = event.target;
    if (!value || value === '') {
      this.formControl.setValue('#ffffff');
    } else if (!(value as string).includes('#')) {
      this.formControl.setValue(`#${value}`);
    }
  }
}
