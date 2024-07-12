import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExamplesRouterViewerComponent } from '../../shared';
import { CommonModule, debugFields } from '../common';
import { AppComponent } from './app.component';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { InputExampleConfig } from '../common/input';
import { CheckboxExampleConfig } from '../common/checkbox';
import { RadioExampleConfig } from '../common/radio';
import { TextareaExampleConfig } from '../common/textarea';
import { SelectExampleConfig } from './select';
import { DatepickerAppModule, DatepickerExampleConfig } from './datepicker';
import { AutoCompleteAppModule, AutoCompleteExampleConfig } from './auto-complete';
import { MultiSelectAppModule, MultiSelectExampleConfig } from './multi-select';

@NgModule({
  imports: [
    CommonModule,
    FormlyPrimeNGModule,
    DatepickerAppModule,
    AutoCompleteAppModule,
    MultiSelectAppModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppComponent,
        children: [
          {
            path: '',
            component: ExamplesRouterViewerComponent,
            data: {
              debugFields,
              examples: [
                InputExampleConfig,
                TextareaExampleConfig,
                CheckboxExampleConfig,
                RadioExampleConfig,
                SelectExampleConfig,
                DatepickerExampleConfig,
                AutoCompleteExampleConfig,
                MultiSelectExampleConfig,
              ],
            },
          },
        ],
      },
    ]),
  ],
  declarations: [AppComponent],
})
export class ConfigModule {}
