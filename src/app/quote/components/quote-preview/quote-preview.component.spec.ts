import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotePreviewComponent } from './quote-preview.component';

describe('QuotePreviewComponent', () => {
  let component: QuotePreviewComponent;
  let fixture: ComponentFixture<QuotePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotePreviewComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
