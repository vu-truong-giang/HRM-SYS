import { Component , inject , signal} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { TextField } from '../../../../shared/models/field-types/text-fiels.model';
import { DateField } from '../../../../shared/models/field-types/date-field.model';
import { SelectField } from '../../../../shared/models/field-types/select-field.model';
import { DynamicFormComponent } from '../../../../shared/dynamic-form/dynamic-form.component';
import { EmailField } from '../../../../shared/models/field-types/email-field.model';

export type dynamicform = TextField | DateField | SelectField | EmailField ;
@Component({
  selector: 'app-employee-create',
  imports: [
    DynamicFormComponent,
    TranslatePipe
  ],
  templateUrl: './employee-create.component.html',
  styleUrl: './employee-create.component.scss'
})
export class EmployeeCreateComponent {
  formClass = "p-4 rounded border border-gray-200 bg-white";
  fields : dynamicform[] = [
    {
      type: 'text',
      name: 'Mã nhân viên',
      label: 'EMP.CREATE.ID',
      placeholder: 'EMP__',
      required: true,
      pattern: /^EMP\d{3}$/,
      className: {
        span: 'col-span-6'
      }
    },
    {
      type: 'text',
      name: 'Họ và tên',
      label: 'EMP.CREATE.FULL_NAME',
      placeholder: 'Nguyễn Văn A',
      required: true,
      pattern: /^[a-zA-ZÀ-ỹ\s]+$/,
      className: {
        span: 'col-span-6'
      }
    },
    {
      type: 'select',
      name: 'Giới tính',
      label: 'EMP.CREATE.GENDER',
      required: true,
      options: [
        { label: 'Nam', value: 'male' },
        { label: 'Nữ', value: 'female' },
      ],
      className: {
        span: 'col-span-6'
      }
    },
    {
      type: 'date',
      name: 'Ngày sinh',
      label: 'EMP.CREATE.DATE_OF_BIRTH',
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(),
      placeholder: 'yyyy-mm-dd',
      required: true,
      className: {
        span: 'col-span-6',
        label: 'block text-sm font-semibold text-gray-700'
      }
    },
    {
      type: 'email',
      name: 'Email',
      label: 'EMP.CREATE.EMAIL',
      placeholder: 'name@company.vn',
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      className: {
        span: 'col-span-6'
      }
    },
    {
      type: 'tel',
      name: 'Số điện thoại',
      label: 'EMP.CREATE.PHONE',
      placeholder: '0123456789',
      required: true,
      pattern: /^0\d{9}$/,
      className: {
        span: 'col-span-6'
      }
    },
    {
      type: 'select',
      name: 'Phòng ban',
      label: 'EMP.CREATE.DEPARTMENT',
      required: true,
      options: [
        { label: 'Kinh doanh', value: 'sales' },
        { label: 'Kỹ thuật', value: 'engineering' },
        { label: 'Hành chính', value: 'hr' },
      ],
      className: {
        span: 'col-span-6'
      }
    },
    {
      type: 'select',
      name: 'Chức vụ',
      label: 'EMP.CREATE.POSITION',
      required: true,
      options: [
        { label: 'Nhân viên', value: 'employee' },
        { label: 'Quản lý', value: 'manager' },
        { label: 'Giám đốc', value: 'director' },
      ],
      className: {
        span: 'col-span-6'
      }
    },
    {
      type: 'date',
      name: 'Ngày vào làm',
      label: 'EMP.CREATE.JOIN_DATE',
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(),
      placeholder: 'yyyy-mm-dd',
      required: true,
      className: {
        span: 'col-span-6',
        label: 'block text-sm font-semibold text-gray-700'
      }
    },
    {
      type: 'number',
      name: 'Lương',
      label: 'EMP.CREATE.SALARY',
      placeholder: 'VND',
      required: true,
      pattern: /^\d+$/,
      className: {
        span: 'col-span-6'
      }
    },
    {
      type: 'select',
      name: 'Trạng thái',
      label: 'EMP.CREATE.STATUS',
      placeholder: 'ACTIVE / PROBATION / INACTIVE / TERMINATED  ▾',
      required: true,
      options: [
        { label: 'Hoạt động', value: 'active' },
        { label: 'Ngừng hoạt động', value: 'inactive' },
      ],
      className: {
        span: 'col-span-6'
      }
    }
  ]

}
