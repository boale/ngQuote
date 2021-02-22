import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-page',
  templateUrl: './quote-page.component.html',
  styleUrls: [ './quote-page.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuotePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
