import { DynamicFieldOption , BaseFieldConfig} from './BaseFieldConfig';
export interface SelectFieldConfig extends BaseFieldConfig {
    type: 'select';

    options: DynamicFieldOption[];
}