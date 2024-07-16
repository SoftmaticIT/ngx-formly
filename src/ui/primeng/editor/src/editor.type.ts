import { Component, ChangeDetectionStrategy, Type, TemplateRef } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';
import { EditorInitEvent, EditorSelectionChangeEvent, EditorTextChangeEvent } from 'primeng/editor';

interface EditorProps extends FormlyFieldProps {
  style?: any;
  styleClass?: string;
  formats?: string[];
  modules?: any;
  bounds?: string | HTMLElement;
  scrollingContainer?: string | HTMLElement;
  debug?: string;
  onInit?: (event: EditorInitEvent) => void;
  onTextChange?: (event: EditorTextChangeEvent) => void;
  onSelectionChange?: (event: EditorSelectionChangeEvent) => void;
  headerTemplate?: TemplateRef<any>;
}

export interface FormlyEditorFieldConfig extends FormlyFieldConfig<EditorProps> {
  type: 'editor' | Type<FormlyFieldEditor>;
}

@Component({
  selector: 'formly-field-primeng-Editor',
  templateUrl: './editor.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldEditor extends FieldType<FieldTypeConfig<EditorProps>> {}
