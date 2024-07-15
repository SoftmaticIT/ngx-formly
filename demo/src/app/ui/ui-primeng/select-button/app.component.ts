import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  model: any = {};
  readonly form = new FormGroup({});
  readonly options: FormlyFormOptions = {};
  readonly fields: FormlyFieldConfig[] = [
    {
      key: 'SelectButton',
      type: 'select-button',
      props: {
        label: 'Select Button',
        required: true,
        optionLabel: 'label',
        optionValue: 'value',
        options: [
          { label: 'on', value: true },
          { label: 'off', value: false },
        ],
      },
    },
  ];
}
