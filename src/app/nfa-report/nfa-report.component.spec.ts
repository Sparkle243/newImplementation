import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfaReportComponent } from './nfa-report.component';

describe('NfaReportComponent', () => {
  let component: NfaReportComponent;
  let fixture: ComponentFixture<NfaReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NfaReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NfaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
