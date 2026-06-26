export type fieldType = 
    | 'text' | 'password' | 'textarea' | 'number' | 'email'
    | 'select' | 'checkbox' | 'radio' | 'date' | 'search'

export interface DynamicFieldOption {
    label : string;
    value : any;
}

export interface DynamicFieldConfig {
    name : string;
    label : string;
    type : fieldType;
    placeholder ?: string;
    defaultValue ?: any;
    required ?: boolean;
    disabled ?: boolean;
    options ?: DynamicFieldOption;
}