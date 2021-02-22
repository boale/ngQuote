import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesListTableComponent } from './quotes-list-table.component';

describe('QuotesListTableComponent', () => {
  let component: QuotesListTableComponent;
  let fixture: ComponentFixture<QuotesListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesListTableComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
