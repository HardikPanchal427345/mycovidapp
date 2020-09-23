import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasecardComponent } from './casecard.component';

describe('CasecardComponent', () => {
  let component: CasecardComponent;
  let fixture: ComponentFixture<CasecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
