import { Component , Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CheckboxFieldConfig } from '../../models/checkbox-field-config';
@Component({
  selector: 'app-checkbox-field',
  standalone: true,
  imports: [],
  templateUrl: './checkbox-field.component.html',
  styleUrl: './checkbox-field.component.scss'
})
export class CheckboxFieldComponent {
  @Input({ required: true }) field!: CheckboxFieldConfig;
  @Input({ required: true }) form!: FormGroup;
}
