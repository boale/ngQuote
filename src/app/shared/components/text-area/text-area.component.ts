import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: [ './text-area.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextAreaComponent implements OnInit {
  @Input() placeholder = '';
  @Input() label = '';
  @Input() form: FormGroup;
  @Input() id: string;

  control: FormControl;

  ngOnInit() {
    this.control = this.form.get(this.id) as FormControl;
  }
}
