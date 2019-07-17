import { Email } from './../models/email.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-email-tab',
  templateUrl: './email-tab.component.html',
  styleUrls: ['./email-tab.component.css']
})
export class EmailTabComponent implements OnInit {

  @Input() displayEmail: Email;


  constructor() { }

  ngOnInit() {
  }

}
