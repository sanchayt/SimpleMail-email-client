import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-email-message',
  templateUrl: './email-message.component.html',
  styleUrls: ['./email-message.component.css']
})
export class EmailMessageComponent implements OnInit {


  firstName: string;
  lastName: string;
  subject: string;
  message: string;


  constructor() { }

  ngOnInit() {
  this.firstName = '';
  this.lastName = '';
  this.subject = '';
  this.message = '';

  }

}
