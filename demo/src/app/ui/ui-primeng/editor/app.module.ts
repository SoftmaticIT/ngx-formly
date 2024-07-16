import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { AppComponent } from './app.component';
import { FormlyEditorModule } from '@ngx-formly/primeng/editor';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormlyModule.forRoot({}), FormlyEditorModule],
  declarations: [AppComponent],
})
export class AppModule {}
