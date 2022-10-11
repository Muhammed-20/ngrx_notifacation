import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAppoComponent } from './form-appo.component';

describe('FormAppoComponent', () => {
  let component: FormAppoComponent;
  let fixture: ComponentFixture<FormAppoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAppoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAppoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
