import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldArrayType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';

interface RepeaterProps extends FormlyFieldProps {
  addLabel?: string;
}

export interface FormlyRepeaterFieldConfig extends FormlyFieldConfig<RepeaterProps> {
  type: 'repeater' | Type<FormlyFieldRepeater>;
}

@Component({
  selector: 'formly-field-primeng-repeater',
  templateUrl: './repeater.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldRepeater extends FieldArrayType<FieldTypeConfig<RepeaterProps>> {}
