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
      key: 'InputMask',
      type: 'input-mask',
      props: {
        // props.mask is required for this input type
        label: 'Input mask',
        clearIcon: 'pi-check',
        showClear: true,
        mask: '99-999999',
      },
    },
  ];
}
