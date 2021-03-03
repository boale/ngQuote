import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ShareOption } from '../view.models';

// eslint-disable-next-line max-len
const EMAIL_REG_EX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: 'app-share-form',
  templateUrl: './share-form.component.html',
  styleUrls: [ './share-form.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShareFormComponent implements OnInit {
  shareOptions: ShareOption[] = [
    {
      type: 'email',
      inputType: 'email',
      title: 'Email',
      placeholder: 'email@example.com',
      validators: [
        Validators.required,
        Validators.pattern(EMAIL_REG_EX),
      ],
    },
    {
      type: 'phone',
      inputType: 'tel',
      title: 'Phone',
      placeholder: '+380999998877',
      validators: [ Validators.required, Validators.maxLength(15) ],
    },
  ];
  selectedShareOption = this.shareOptions[ 0 ];
  shareFormControl: FormControl;
  form: FormGroup;

  @Output() shareSubmit = new EventEmitter<any>();
  @Output() shareCancel = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
  ) {
    this.selectShareOption(this.selectedShareOption);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      [ 'share' ]: this.shareFormControl,
    });
  }

  selectShareOption(shareOption: ShareOption): void {
    this.selectedShareOption = shareOption;

    if (this.shareFormControl) {
      this.form.controls[ 'share' ].setValidators(shareOption.validators);
      this.shareFormControl.setValue('');

      return;
    }

    this.shareFormControl = new FormControl('', shareOption.validators);
  }

  isShareOptionActive(shareOption: ShareOption): boolean {
    return this.selectedShareOption === shareOption;
  }

  submit(): void {
    if (!this.isShareFormValid) {
      return;
    }

    this.shareSubmit.emit({ [ this.selectedShareOption.type ]: this.shareFormControl.value });
  }

  dismiss(): void {
    this.shareCancel.emit();
  }

  get isShareFormValid() {
    return this.shareFormControl && this.shareFormControl.valid;
  }

}
