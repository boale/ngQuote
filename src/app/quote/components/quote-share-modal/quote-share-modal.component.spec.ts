import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteShareModalComponent } from './quote-share-modal.component';

describe('ShareModalComponent', () => {
  let component: QuoteShareModalComponent;
  let fixture: ComponentFixture<QuoteShareModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteShareModalComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteShareModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
