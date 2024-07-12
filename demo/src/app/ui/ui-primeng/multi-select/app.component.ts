import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('selectedItems', { static: true })
  private readonly _selectedItems!: TemplateRef<ElementRef>;

  @ViewChild('item', { static: true })
  private readonly _item!: TemplateRef<ElementRef>;

  @ViewChild('footer', { static: true })
  private readonly _footer!: TemplateRef<ElementRef>;

  model: any = {};
  fields: FormlyFieldConfig[] = [];
  readonly form = new FormGroup({});
  readonly options: FormlyFormOptions = {};

  constructor(private readonly _changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.fields = [
      {
        key: 'multiselect',
        type: 'multi-select',
        props: {
          label: 'MultiSelect Type',
          placeholder: 'Select countries',
          required: true,
          itemTemplate: this._item,
          selectedItemsTemplate: this._selectedItems,
          footerTemplate: this._footer,
          optionLabel: 'name',
          optionValue: 'code',
          options: [
            { name: 'Australia', code: 'AU' },
            { name: 'Brazil', code: 'BR' },
            { name: 'China', code: 'CN' },
            { name: 'Egypt', code: 'EG' },
            { name: 'France', code: 'FR' },
            { name: 'Germany', code: 'DE' },
            { name: 'India', code: 'IN' },
            { name: 'Japan', code: 'JP' },
            { name: 'Spain', code: 'ES' },
            { name: 'United States', code: 'US' },
          ],
        },
      },
    ];

    this._changeDetectorRef.detectChanges();
  }
}
