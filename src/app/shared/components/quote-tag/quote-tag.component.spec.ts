import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteTagComponent } from './quote-tag.component';

describe('QuoteTagComponent', () => {
  let component: QuoteTagComponent;
  let fixture: ComponentFixture<QuoteTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteTagComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
