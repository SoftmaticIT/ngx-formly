import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { AppComponent } from './app.component';
import { FormlyStepperModule } from '@ngx-formly/ui/primeng/stepper';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormlyModule.forRoot({}), FormlyStepperModule],
  declarations: [AppComponent],
})
export class AppModule {}
