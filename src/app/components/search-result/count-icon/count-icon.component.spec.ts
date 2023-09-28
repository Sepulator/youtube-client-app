import { ComponentFixture, TestBed } from '@angular/core/testing';

import CountIconComponent from './count-icon.component';

describe('CountIconComponent', () => {
  let component: CountIconComponent;
  let fixture: ComponentFixture<CountIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountIconComponent],
    });
    fixture = TestBed.createComponent(CountIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
