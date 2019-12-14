import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShowCoverLetterComponent } from './create-show-cover-letter.component';

describe('CoverLetterComponent', () => {
  let component: CreateShowCoverLetterComponent;
  let fixture: ComponentFixture<CreateShowCoverLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateShowCoverLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateShowCoverLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
