import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'ng-template[name]',
})
export class TemplateDirective {
  @Input() name: string;

  constructor(
    public template: TemplateRef<any>,
  ) { }
}
