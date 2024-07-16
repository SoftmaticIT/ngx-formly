import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { EditorInitEvent, EditorTextChangeEvent } from 'primeng/editor';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];

  ngAfterViewInit(): void {
    this.fields = [
      {
        key: 'Editor',
        type: 'editor',
        props: {
          style: {
            height: '320px',
          },
          placeholder: 'Inserisci il tuo testo',
          onInit: (event: EditorInitEvent) => {
            console.log(event);
          },
        },
      },
    ];
  }
}
