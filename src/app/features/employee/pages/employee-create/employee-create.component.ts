import { Component , inject , signal} from '@angular/core';

import { TextField } from '../../../../shared/models/field-types/text-fiels.model';
import { DateField } from '../../../../shared/models/field-types/date-field.model';
import { SelectField } from '../../../../shared/models/field-types/select-field.model';
import { DynamicFormComponent } from '../../../../shared/dynamic-form/dynamic-form.component';
import { EmailField } from '../../../../shared/models/field-types/email-field.model';

export type dynamicform = TextField | DateField | SelectField | EmailField ;
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
    },
    {
      type: 'select',
      name: 'Giới tính',
      label: 'Giới tính',
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
      label: 'Ngày sinh',
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(),
      placeholder: 'yyyy-mm-dd',
      className: {
        span: 'col-span-6',
        label: 'block text-sm font-semibold text-gray-700'
      }
    },
    {
      type: 'email',
      name: 'Email',
      label: 'Email',
      placeholder: 'name@company.vn',
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      className: {
        span: 'col-span-6'
      }
    },
    {
      type: 'select',
      name: 'Phòng ban',
      label: 'Phòng ban',
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
      name: 'Chức danh',
      label: 'Chức danh',
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
      label: 'Ngày vào làm',
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(),
      placeholder: 'yyyy-mm-dd',
      className: {
        span: 'col-span-6',
        label: 'block text-sm font-semibold text-gray-700'
      }
    },
    {
      type: 'number',
      name: 'Lương cơ bản',
      label: 'Lương cơ bản',
      placeholder: 'VND',
      pattern: /^\d+$/,
      className: {
        span: 'col-span-6'
      }
    },
    {
      type: 'select',
      name: 'Trạng thái',
      label: 'Trạng thái',
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
