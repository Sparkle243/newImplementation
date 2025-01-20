import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfNoteForApprovalComponent } from './list-of-note-for-approval.component';

describe('ListOfNoteForApprovalComponent', () => {
  let component: ListOfNoteForApprovalComponent;
  let fixture: ComponentFixture<ListOfNoteForApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfNoteForApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfNoteForApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
