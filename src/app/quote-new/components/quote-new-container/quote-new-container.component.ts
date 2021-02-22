import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-new-container',
  templateUrl: './quote-new-container.component.html',
  styleUrls: [ './quote-new-container.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuoteNewContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
