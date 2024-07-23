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
import { TabViewAppModule, TabViewExampleConfig } from './tab-view';

@NgModule({
  imports: [
    CommonModule,
    FormlyPrimeNGModule,
    DatepickerAppModule,
    AutoCompleteAppModule,
    TabViewAppModule,
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
                TabViewExampleConfig,
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
