import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTabComponent } from './email-tab.component';

describe('EmailTabComponent', () => {
  let component: EmailTabComponent;
  let fixture: ComponentFixture<EmailTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
