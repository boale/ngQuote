import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteEditContainerComponent } from './quote-edit-container.component';

describe('QuoteEditContainerComponent', () => {
  let component: QuoteEditContainerComponent;
  let fixture: ComponentFixture<QuoteEditContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteEditContainerComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteEditContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
