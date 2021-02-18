import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { NgxSmartModalComponent, NgxSmartModalService } from 'ngx-smart-modal';

import { ModalIds } from '../view.models';
import { ContactData, Quote } from '../../models';

@Component({
  selector: 'app-share-modal',
  templateUrl: './quote-share-modal.component.html',
  styleUrls: [ './quote-share-modal.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuoteShareModalComponent implements OnInit {
  private modal: NgxSmartModalComponent;
  quote: Quote;

  constructor(
    private modalService: NgxSmartModalService,
  ) { }

  ngOnInit(): void {
    this.modal = this.modalService.get(ModalIds.quoteShare);

    const { quote } = this.modal.getData();
    this.quote = quote;
  }

  onShareSubmit(contactData: ContactData): void {
    this.modal.setData({ quote: this.quote, ...contactData }, true);
    this.modal.close();
  }

  onShareCancel(): void {
    this.modal.setData(null, true);
    this.modal.close();
  }

}
