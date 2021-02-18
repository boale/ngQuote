import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareFormComponent } from './share-form.component';

describe('ShareFormComponent', () => {
  let component: ShareFormComponent;
  let fixture: ComponentFixture<ShareFormComponent>;

  const shareOption = {
    type: 'test',
    inputType: 'test',
    title: 'title',
    placeholder: 'placeholder',
    validators: [],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareFormComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('selectShareOption', () => {
    it('should initialize share form control and set selectedShareOption', () => {
      component.selectShareOption(shareOption);

      expect(component.shareFormControl).toBeTruthy();
      expect(component.selectedShareOption).toEqual(shareOption);
    });
  });

  describe('submit', () => {
    it('should submit the form', () => {
      const spy = spyOn(component.shareSubmit, 'emit');

      component.selectShareOption(shareOption);
      component.shareFormControl.setValue('value_test');
      component.submit();

      expect(spy).toHaveBeenCalledWith({
        'test': 'value_test',
      });
    });

    it('should not submit the form if it is not valid', () => {
      const spy = spyOn(component.shareSubmit, 'emit');

      component.submit();

      expect(spy).not.toHaveBeenCalled();
    });
  });

  describe('dismiss', () => {
    it('should dismiss the form', () => {
      const spy = spyOn(component.shareCancel, 'emit');
      component.dismiss();

      expect(spy).toHaveBeenCalled();
    });
  });
});
