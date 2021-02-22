import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotePageComponent } from './quote-page.component';

describe('QuotePageComponent', () => {
  let component: QuotePageComponent;
  let fixture: ComponentFixture<QuotePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotePageComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
