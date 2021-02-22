import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteNewContainerComponent } from './quote-new-container.component';

describe('QuoteNewContainerComponent', () => {
  let component: QuoteNewContainerComponent;
  let fixture: ComponentFixture<QuoteNewContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteNewContainerComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteNewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
