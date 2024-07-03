import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { AppComponent } from './app.component';
import { FormlyAutoCompleteModule } from '@ngx-formly/primeng/auto-complete';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormlyModule.forRoot({}), FormlyAutoCompleteModule],
  declarations: [AppComponent],
})
export class AppModule {}
