import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: [ './input.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnInit {
  @Output() clear = new EventEmitter<string>();

  @Input() placeholder = '';
  @Input() label = '';
  @Input() hasClearButton = false;
  @Input() form: FormGroup;
  @Input() type: string;
  @Input() id: string;

  control: FormControl;

  ngOnInit(): void {
    this.control = this.form.get(this.id) as FormControl;
  }

  clearButtonClicked(): void {
    this.clear.emit(this.id);
  }
}
