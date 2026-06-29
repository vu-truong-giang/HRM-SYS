import { ValidatorFn } from '@angular/forms';

export type FieldType =
  | 'text'
  | 'password'
  | 'textarea'
  | 'email'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'date'
  | 'search';

export interface DynamicFieldOption {
  label: string;
  value: any;
}

export interface BaseFieldConfig {
  name: string;
  label: string;
  type: FieldType;

  value?: any;
  placeholder?: string;

  disabled?: boolean;
  readonly?: boolean;
  hidden?: boolean;

  options?: DynamicFieldOption[];

  validators?: ValidatorFn[];

  errorMessages?: Record<string, string>;

  hint?: string;
  class?: string;
}