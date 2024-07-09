import { AppModule as DropdownAppModule } from './app.module';
import { AppComponent as DropdownAppComponent } from './app.component';

const DropdownExampleConfig = {
  title: 'Dropdown type',
  component: DropdownAppComponent,
  debug: true,
  files: [
    {
      file: 'app.component.html',
      content: require('!!highlight-loader?raw=true&lang=html!./app.component.html'),
      filecontent: require('!!raw-loader!./app.component.html'),
    },
    {
      file: 'app.component.ts',
      content: require('!!highlight-loader?raw=true&lang=typescript!./app.component.ts'),
      filecontent: require('!!raw-loader!./app.component.ts'),
    },
    {
      file: 'app.module.ts',
      content: require('!!highlight-loader?raw=true&lang=typescript!./app.module.ts'),
      filecontent: require('!!raw-loader!./app.module.ts'),
    },
  ],
};

export { DropdownAppModule, DropdownAppComponent, DropdownExampleConfig };
