import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTabListComponent } from './email-tab-list.component';

describe('EmailTabListComponent', () => {
  let component: EmailTabListComponent;
  let fixture: ComponentFixture<EmailTabListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailTabListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailTabListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
