import { FormGroup } from '@angular/forms';
import { XFormFieldConfig } from './x-form-field-config';

export interface XFormField {
    config: XFormFieldConfig;
    group: FormGroup;
}