import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { TextAreaComponent } from './text-area.component';

describe('TextAreaComponent', () => {
  let component: TextAreaComponent;
  let fixture: ComponentFixture<TextAreaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ TextAreaComponent ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAreaComponent);
    component = fixture.componentInstance;

    component.id = 'text';
    component.form = new FormBuilder().group({
      text: '',
    });

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
