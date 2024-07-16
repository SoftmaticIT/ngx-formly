import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { FormlyFormFieldModule } from '@ngx-formly/primeng/form-field';
import { FormlyFieldRating } from './rating.type';
import { FormlySelectModule } from '../../../../core/select/src/select.module';

@NgModule({
  declarations: [FormlyFieldRating],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RatingModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'rating',
          component: FormlyFieldRating,
          wrappers: ['form-field'],
        },
      ],
    }),
    FormlySelectModule,
  ],
})
export class FormlyRatingModule {}
