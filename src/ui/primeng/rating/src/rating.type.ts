import { Component, ChangeDetectionStrategy, Type, TemplateRef } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';
import { FormlyAttributeEvent } from 'src/core/src/lib/models';

interface RatingProps extends FormlyFieldProps {
  stars?: number;
  cancel?: boolean;
  iconOnClass?: string;
  iconOnStyle?: Object;
  iconOffClass?: string;
  iconOffStyle?: Object;
  iconCancelClass?: string;
  iconCancelStyle?: Object;
  autofocus?: boolean;
  rate?: FormlyAttributeEvent;
  onIconTemplate?: TemplateRef<any>;
  offIconTemplate?: TemplateRef<any>;
  cancelIconTemplate?: TemplateRef<any>;
}

export interface FormlyRatingFieldConfig extends FormlyFieldConfig<RatingProps> {
  type: 'rating' | Type<FormlyFieldRating>;
}

@Component({
  selector: 'formly-field-primeng-rating',
  templateUrl: './rating.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldRating extends FieldType<FieldTypeConfig<RatingProps>> {}
