import { BaseFieldConfig, DynamicFieldOption } from "./BaseFieldConfig";

export interface RadioFieldConfig extends BaseFieldConfig {
    type: 'radio';

    checkValue: boolean;
}