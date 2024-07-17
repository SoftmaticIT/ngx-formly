import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { AppComponent } from './app.component';
import { FormlyInputMaskModule } from '@ngx-formly/primeng/input-mask';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormlyModule.forRoot({}), FormlyInputMaskModule],
  declarations: [AppComponent],
})
export class AppModule {}
