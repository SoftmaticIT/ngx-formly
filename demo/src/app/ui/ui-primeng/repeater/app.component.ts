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
      key: 'tasks',
      type: 'repeater',
      props: {
        label: 'TODO LIST',
        description: 'Here you can add or remove your todos',
        addLabel: 'Add Task',
      },
      fieldArray: {
        type: 'input',
        props: {
          placeholder: 'Task name',
          required: true,
        },
      },
    },
  ];
}
