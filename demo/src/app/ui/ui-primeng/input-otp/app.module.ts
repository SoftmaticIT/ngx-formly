import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { AppComponent } from './app.component';
import { FormlyInputOtpModule } from '@ngx-formly/ui/primeng/input-otp';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormlyModule.forRoot({}), FormlyInputOtpModule],
  declarations: [AppComponent],
})
export class AppModule {}
