import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';

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
      key: 'Autocomplete',
      type: 'autocomplete',
      props: {
        label: 'Autocomplete',
        placeholder: 'Placeholder',
        required: true,
        optionLabel: 'label',
        optionValue: 'value',
        options: [
          {
            label: 'Item #1',
            value: '#1',
          },
          {
            label: 'Item #2',
            value: '#2',
          },
          {
            label: 'Item #3',
            value: '#3',
          },
        ],
        suggestions: [],
        completeMethod: (field: FormlyFieldConfig, event: AutoCompleteCompleteEvent) => {
          field.props['suggestions'] = (field.props['options'] as any[]).filter((e) => e.label.includes(event.query));
        },
      },
    },
  ];
}
