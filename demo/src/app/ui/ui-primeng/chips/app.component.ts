import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('item')
  private readonly _item!: TemplateRef<ElementRef>;

  model: any = {};
  fields: FormlyFieldConfig[] = [];
  readonly options: FormlyFormOptions = {};
  readonly form = new FormGroup({});

  constructor(private readonly _changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.fields = [
      {
        key: 'Chips',
        type: 'chips',
        props: {
          label: 'Chips',
          max: 2,
          placeholder: 'Max 2 chips',
          required: true,
          itemTemplate: this._item,
        },
      },
    ];

    this._changeDetectorRef.detectChanges();
  }
}
