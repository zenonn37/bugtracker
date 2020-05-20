import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugDefaultComponent } from './bug-default.component';

describe('BugDefaultComponent', () => {
  let component: BugDefaultComponent;
  let fixture: ComponentFixture<BugDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
