import { Component , inject , signal} from '@angular/core';

import { TextField } from '../../../../shared/models/field-types/text-fiels.model';
import { DateField } from '../../../../shared/models/field-types/date-field.model';
import { SelectField } from '../../../../shared/models/field-types/select-field.model';
import { DynamicFormComponent } from '../../../../shared/dynamic-form/dynamic-form.component';


export type dynamicform = TextField | DateField | SelectField ;
@Component({
  selector: 'app-employee-create',
  imports: [
    DynamicFormComponent
  ],
  templateUrl: './employee-create.component.html',
  styleUrl: './employee-create.component.scss'
})
export class EmployeeCreateComponent {
  formClass = "p-4 rounded-lg border border-gray-200 bg-white";
  fields : dynamicform[] = [
    {
      type: 'text',
      name: 'Mã nhân viên',
      label: 'Mã nhân viên',
      placeholder: 'EMP__',
      pattern: /^EMP\d{3}$/,
      className: {
        span: 'col-span-6'
      }
    },
    {
      type: 'text',
      name: 'Họ và tên',
      label: 'Họ và tên',
      placeholder: 'Nguyễn Văn A',
      pattern: /^[a-zA-ZÀ-ỹ\s]+$/,
      className: {
        span: 'col-span-6'
      }
    }
  ]

}
