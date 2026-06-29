import { BaseFieldConfig } from "./BaseFieldConfig";

export interface DateFieldConfig extends BaseFieldConfig {
    type: 'date';

    min?: string;
    max?: string;
}