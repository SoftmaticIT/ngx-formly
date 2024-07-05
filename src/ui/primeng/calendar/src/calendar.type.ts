import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';
import { CalendarResponsiveOptions, CalendarTypeView, LocaleSettings } from 'primeng/calendar';
import { FormlyAttributeEvent } from 'src/core/src/lib/models';

interface CalendarProps extends FormlyFieldProps {
  style?: any;
  styleClass?: string;
  inputStyle?: any;
  inputId?: string;
  name?: string;
  inputStyleClass?: string;
  ariaLabelledBy?: string;
  ariaLabel?: string;
  iconAriaLabel?: string;
  dateFormat?: string;
  multipleSeparator?: string;
  rangeSeparator?: string;
  inline?: boolean;
  showOtherMonths?: boolean;
  selectOtherMonths?: boolean;
  showIcon?: boolean;
  icon?: string;
  appendTo?: any;
  readonlyInput?: boolean;
  shortYearCutoff?: any;
  monthNavigator?: boolean;
  yearNavigator?: boolean;
  hourFormat?: string;
  timeOnly?: boolean;
  stepYearPicker?: number;
  stepHour?: number;
  stepMinute?: number;
  stepSecond?: number;
  showSeconds?: boolean;
  showOnFocus?: boolean;
  showWeek?: boolean;
  startWeekFromFirstDayOfYear?: boolean;
  showClear?: boolean;
  dataType?: string;
  selectionMode?: 'multiple' | 'range' | 'single';
  maxDateCount?: number;
  showButtonBar?: boolean;
  todayButtonStyleClass?: string;
  clearButtonStyleClass?: string;
  autofocus?: boolean;
  autoZIndex?: boolean;
  baseZIndex?: number;
  panelStyleClass?: string;
  panelStyle?: any;
  keepInvalid?: boolean;
  hideOnDateTimeSelect?: boolean;
  touchUI?: boolean;
  timeSeparator?: string;
  focusTrap?: boolean;
  showTransitionOptions?: string;
  hideTransitionOptions?: string;
  variant?: 'outlined' | 'filled';
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  disabledDays?: number[];
  yearRange?: string;
  showTime?: boolean;
  responsiveOptions?: CalendarResponsiveOptions[];
  numberOfMonths?: number;
  firstDayOfWeek?: number;
  locale?: LocaleSettings;
  view?: CalendarTypeView;
  defaultDate?: Date;
  close?: FormlyAttributeEvent;
  select?: FormlyAttributeEvent;
  clear?: FormlyAttributeEvent;
  input?: FormlyAttributeEvent;
  todayClick?: FormlyAttributeEvent;
  clearClick?: FormlyAttributeEvent;
  monthChange?: FormlyAttributeEvent;
  yearChange?: FormlyAttributeEvent;
  clickOutside?: FormlyAttributeEvent;
  show?: FormlyAttributeEvent;
}

export interface FormlyCalendarFieldConfig extends FormlyFieldConfig<CalendarProps> {
  type: 'calendar' | Type<FormlyFieldCalendar>;
}

@Component({
  selector: 'formly-field-primeng-calendar',
  templateUrl: './calendar.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldCalendar extends FieldType<FieldTypeConfig<CalendarProps>> {
  private _date?: Date;

  get currentDate(): Date {
    if (this._date === undefined) this._date = new Date();
    return this._date;
  }
}
