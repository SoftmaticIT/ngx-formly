import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';
import { FormlyAttributeEvent } from 'src/core/src/lib/models';

interface StepperProps extends FormlyFieldProps {
  activeStep?: number;
  orientation?: 'vertical' | 'horizontal';
  linear?: boolean;
  backLabel?: string;
  nextLabel?: string;
  submitLabel?: string;
  activeStepChange?: FormlyAttributeEvent;
}

export interface FormlyStepperFieldConfig extends FormlyFieldConfig<StepperProps> {
  type: 'stepper' | Type<FormlyFieldStepper>;
}

@Component({
  selector: 'formly-field-primeng-Stepper',
  templateUrl: './stepper.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldStepper extends FieldType<FieldTypeConfig<StepperProps>> {
  isValid(field: FormlyFieldConfig): boolean {
    if (field.key) {
      return field.formControl.valid;
    }

    return field.fieldGroup ? field.fieldGroup.every((f) => this.isValid(f)) : true;
  }
}
