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
      key: 'Stepper',
      type: 'stepper',
      props: {
        orientation: 'vertical',
      },
      fieldGroup: [
        {
          props: { label: 'Personal data' },
          fieldGroup: [
            {
              key: 'firstname',
              type: 'input',
              props: {
                label: 'First name',
                required: true,
              },
            },
            {
              key: 'age',
              type: 'input',
              props: {
                type: 'number',
                label: 'Age',
                required: true,
              },
            },
          ],
        },
        {
          props: { label: 'Destination' },
          fieldGroup: [
            {
              key: 'country',
              type: 'input',
              props: {
                label: 'Country',
                required: true,
              },
            },
          ],
        },
        {
          props: { label: 'Username' },
          fieldGroup: [
            {
              key: 'username',
              type: 'input',
              props: {
                label: 'Username',
                required: true,
              },
            },
          ],
        },
      ],
    },
  ];
}
