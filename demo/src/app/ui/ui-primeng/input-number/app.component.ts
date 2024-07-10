import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'InputNumber',
      type: 'input-number',
      props: {
        label: 'Number',
        mode: 'decimal',
        useGrouping: true,
        locale: 'it-IT',
        // minFractionDigits and maxFractionDigits null for integer
        minFractionDigits: 2,
        maxFractionDigits: 5,
      },
    },
  ];
}
