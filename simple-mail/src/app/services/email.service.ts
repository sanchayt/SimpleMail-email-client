import { Email } from './../models/email.model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  url = 'http://127.0.0.1:8080/email';

  constructor(private http: HttpClient) { }

  getEmails()  {
    return this.http.get<Email[]>(this.url);
  }
}
