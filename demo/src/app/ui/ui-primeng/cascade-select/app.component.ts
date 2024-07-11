import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('option', { static: true })
  private readonly _option!: TemplateRef<ElementRef>;

  model: any = {};
  fields: FormlyFieldConfig[] = [];
  readonly form = new FormGroup({});
  readonly options: FormlyFormOptions = {};

  constructor(private readonly _changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.fields = [
      {
        key: 'CascadeSelect',
        type: 'cascade-select',
        props: {
          label: 'Cascade Select',
          placeholder: 'Placeholder',
          required: true,
          optionLabel: 'cname',
          optionGroupLabel: 'name',
          optionGroupChildren: ['states', 'cities'],
          appendTo: 'body',
          optionTemplate: this._option,
          options: [
            {
              name: 'Australia',
              code: 'AU',
              states: [
                {
                  name: 'New South Wales',
                  cities: [
                    { cname: 'Sydney', code: 'A-SY' },
                    { cname: 'Newcastle', code: 'A-NE' },
                    { cname: 'Wollongong', code: 'A-WO' },
                  ],
                },
                {
                  name: 'Queensland',
                  cities: [
                    { cname: 'Brisbane', code: 'A-BR' },
                    { cname: 'Townsville', code: 'A-TO' },
                  ],
                },
              ],
            },
            {
              name: 'Canada',
              code: 'CA',
              states: [
                {
                  name: 'Quebec',
                  cities: [
                    { cname: 'Montreal', code: 'C-MO' },
                    { cname: 'Quebec City', code: 'C-QU' },
                  ],
                },
                {
                  name: 'Ontario',
                  cities: [
                    { cname: 'Ottawa', code: 'C-OT' },
                    { cname: 'Toronto', code: 'C-TO' },
                  ],
                },
              ],
            },
            {
              name: 'United States',
              code: 'US',
              states: [
                {
                  name: 'California',
                  cities: [
                    { cname: 'Los Angeles', code: 'US-LA' },
                    { cname: 'San Diego', code: 'US-SD' },
                    { cname: 'San Francisco', code: 'US-SF' },
                  ],
                },
                {
                  name: 'Florida',
                  cities: [
                    { cname: 'Jacksonville', code: 'US-JA' },
                    { cname: 'Miami', code: 'US-MI' },
                    { cname: 'Tampa', code: 'US-TA' },
                    { cname: 'Orlando', code: 'US-OR' },
                  ],
                },
                {
                  name: 'Texas',
                  cities: [
                    { cname: 'Austin', code: 'US-AU' },
                    { cname: 'Dallas', code: 'US-DA' },
                    { cname: 'Houston', code: 'US-HO' },
                  ],
                },
              ],
            },
          ],
        },
      },
    ];

    this._changeDetectorRef.detectChanges();
  }
}
