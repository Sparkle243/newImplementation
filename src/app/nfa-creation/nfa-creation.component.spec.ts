import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NFACreationComponent } from './nfa-creation.component';

describe('NFACreationComponent', () => {
  let component: NFACreationComponent;
  let fixture: ComponentFixture<NFACreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NFACreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NFACreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
