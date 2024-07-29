import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyFormFieldModule } from '@ngx-formly/primeng/form-field';
import { FormlyFieldCalendar } from './calendar.type';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [FormlyFieldCalendar],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalendarModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'calendar',
          component: FormlyFieldCalendar,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyCalendarModule {}
