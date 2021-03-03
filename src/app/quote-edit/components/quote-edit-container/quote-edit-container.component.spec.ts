import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoaderComponent } from '../../../shared/components';
import { QuoteEditContainerComponent } from './quote-edit-container.component';

describe('QuoteEditContainerComponent', () => {
  let component: QuoteEditContainerComponent;
  let fixture: ComponentFixture<QuoteEditContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [
        QuoteEditContainerComponent,
        LoaderComponent,
      ],
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
