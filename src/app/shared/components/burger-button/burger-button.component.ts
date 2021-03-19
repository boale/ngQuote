import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-burger-button',
  templateUrl: './burger-button.component.html',
  styleUrls: [ './burger-button.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BurgerButtonComponent {
  @Output() clicked = new EventEmitter<MouseEvent | KeyboardEvent>();

  onClick(): void {
    this.clicked.emit();
  }
}
