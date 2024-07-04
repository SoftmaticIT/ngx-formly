import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';
import {
  CalendarMonthChangeEvent,
  CalendarResponsiveOptions,
  CalendarTypeView,
  CalendarYearChangeEvent,
  LocaleSettings,
} from 'primeng/calendar';

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
  onFocus?: (field: FormlyFieldConfig, event: Event) => void;
  onBlur?: (field: FormlyFieldConfig, event: Event) => void;
  onClose?: (field: FormlyFieldConfig, event: AnimationEvent) => void;
  onSelect?: (field: FormlyFieldConfig, event: Date) => void;
  onClear?: (field: FormlyFieldConfig, event: any) => void;
  onInput?: (field: FormlyFieldConfig, event: any) => void;
  onTodayClick?: (field: FormlyFieldConfig, event: Date) => void;
  onClearClick?: (field: FormlyFieldConfig, event: any) => void;
  onMonthChange?: (field: FormlyFieldConfig, event: CalendarMonthChangeEvent) => void;
  onYearChange?: (field: FormlyFieldConfig, event: CalendarYearChangeEvent) => void;
  onClickOutside?: (field: FormlyFieldConfig, event: any) => void;
  onShow?: (field: FormlyFieldConfig, event: any) => void;
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
