import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BurgerButtonComponent } from './burger-button.component';

describe('BurgerButtonComponent', () => {
  let component: BurgerButtonComponent;
  let fixture: ComponentFixture<BurgerButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerButtonComponent ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
