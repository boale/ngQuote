import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { NgxSmartModalComponent, NgxSmartModalService } from 'ngx-smart-modal';

import { ModalIds } from '../../../quote/components/view.models';

@Component({
  selector: 'app-delete-quote-modal',
  templateUrl: './delete-quote-modal.component.html',
  styleUrls: [ './delete-quote-modal.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteQuoteModalComponent implements OnInit {
  private modal: NgxSmartModalComponent;
  private quoteIdToDelete;

  constructor(
    private modalService: NgxSmartModalService,
  ) { }

  ngOnInit(): void {
    this.modal = this.modalService.get(ModalIds.deleteQuote);
    this.quoteIdToDelete = this.modal.getData();
  }

  deleteQuote() {
    this.modal.setData(this.quoteIdToDelete, true);
    this.modal.close();
  }

  cancel() {
    this.modal.setData(null, true);
    this.modal.close();
  }

}
