import { ValidatorFn } from '@angular/forms';

export interface XFormFieldConfig {
    disabled?: boolean;
    label?: string;
    name: string;
    options?: Array<{ id: number, valor: string }>;
    placeholder?: string;
    type: string;
    validation?: ValidatorFn[];
    value?: any;
    minDate: string;
    maxDate: string;
    errors: string[];
}
