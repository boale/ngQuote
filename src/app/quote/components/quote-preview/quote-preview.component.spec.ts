import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuotePreviewComponent } from './quote-preview.component';

describe('QuotePreviewComponent', () => {
  let component: QuotePreviewComponent;
  let fixture: ComponentFixture<QuotePreviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotePreviewComponent ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
