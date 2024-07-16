import { Component, ChangeDetectionStrategy, Type, TemplateRef } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';

interface PasswordProps extends FormlyFieldProps {
  ariaLabel?: string;
  ariaLabelledBy?: string;
  promptLabel?: string;
  mediumRegex?: string;
  strongRegex?: string;
  weakLabel?: string;
  mediumLabel?: string;
  strongLabel?: string;
  inputId?: string;
  feedback?: boolean;
  appendTo?: any;
  toggleMask?: boolean;
  inputStyleClass?: string;
  styleClass?: string;
  style?: object;
  inputStyle?: object;
  showTransitionOptions?: string;
  hideTransitionOptions?: string;
  autocomplete?: string;
  showClear?: boolean;
  autofocus?: boolean;
  variant?: 'outlined' | 'filled';
  onFocus?: (event: Event) => void;
  onBlur?: (event: Event) => void;
  onClear?: (event: any) => void;
  headerTemplate?: TemplateRef<any>;
  contentTemplate?: TemplateRef<any>;
  footerTemplate?: TemplateRef<any>;
  clearIcon?: string;
  hideIcon?: string;
  showIcon?: string;
}

export interface FormlyPasswordFieldConfig extends FormlyFieldConfig<PasswordProps> {
  type: 'password' | Type<FormlyFieldPassword>;
}

@Component({
  selector: 'formly-field-primeng-password',
  templateUrl: './password.type.html',
  styles: `
    .icon {
      position: absolute;
      right: 0.5rem;
      top: 50%;
      margin-top: -0.5rem;
      color: #6c757d;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldPassword extends FieldType<FieldTypeConfig<PasswordProps>> {}
