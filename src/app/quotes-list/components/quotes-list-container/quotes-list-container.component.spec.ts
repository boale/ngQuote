import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesListContainerComponent } from './quotes-list-container.component';

describe('QuotesListLandingComponent', () => {
  let component: QuotesListContainerComponent;
  let fixture: ComponentFixture<QuotesListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesListContainerComponent ],
      imports: [ HttpClientTestingModule ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
