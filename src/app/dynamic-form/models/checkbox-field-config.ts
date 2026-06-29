import { BaseFieldConfig } from "./BaseFieldConfig";

export interface CheckboxFieldConfig extends BaseFieldConfig {
    type: 'checkbox';

    checkValue?: boolean;
}