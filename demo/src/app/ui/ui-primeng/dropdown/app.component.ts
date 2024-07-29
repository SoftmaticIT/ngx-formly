import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { DropdownFilterOptions } from 'primeng/dropdown';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('selectedItem', { static: true })
  private readonly _selectedItem!: TemplateRef<ElementRef>;

  @ViewChild('items', { static: true })
  private readonly _items!: TemplateRef<ElementRef>;

  @ViewChild('filter', { static: true })
  private readonly _filter!: TemplateRef<ElementRef>;

  model: any = {};
  fields: FormlyFieldConfig[];
  readonly form = new FormGroup({});
  readonly options: FormlyFormOptions = {};

  filterValue: string = '';

  constructor(private readonly _changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.fields = [
      {
        key: 'country',
        type: 'dropdown',
        props: {
          required: true,
          label: 'Dropdown',
          placeholder: 'Select a country',
          showClear: true,
          filter: true,
          filterBy: 'name',
          optionLabel: 'name',
          optionValue: 'code',
          selectedItemTemplate: this._selectedItem,
          itemTemplate: this._items,
          filterTemplate: this._filter,
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

    // Required for change detector to work properly, otherwise error
    this._changeDetectorRef.detectChanges();
  }

  customFilterFunction(event: KeyboardEvent, options: DropdownFilterOptions) {
    options.filter(event);
  }

  resetFunction(options: DropdownFilterOptions) {
    options.reset();
    this.filterValue = '';
  }
}
