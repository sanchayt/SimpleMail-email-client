import { Email } from './../models/email.model';
import { EmailService } from './../services/email.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-tab-list',
  templateUrl: './email-tab-list.component.html',
  styleUrls: ['./email-tab-list.component.css']
})
export class EmailTabListComponent implements OnInit {

  constructor(private emailService: EmailService) { }
  allEmails: Email[] = [];

  ngOnInit() {
    // All the emails are received from EmailService via a promise
    this.emailService.getEmails().subscribe(data => {
      this.allEmails = data;

    });
  }

}
