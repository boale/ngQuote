import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-edit-container',
  templateUrl: './quote-edit-container.component.html',
  styleUrls: [ './quote-edit-container.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuoteEditContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
