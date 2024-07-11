import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { AppComponent } from './app.component';
import { FormlyKnobModule } from '@ngx-formly/ui/primeng/knob';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormlyModule.forRoot({}), FormlyKnobModule, ButtonModule],
  declarations: [AppComponent],
})
export class AppModule {}
