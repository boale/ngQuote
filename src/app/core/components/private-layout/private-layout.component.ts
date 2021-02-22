import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private-layout',
  templateUrl: './private-layout.component.html',
  styleUrls: [ './private-layout.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
