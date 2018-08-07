import {OnInit} from "@angular/core";
import {Contact} from "../contact/contact.service";
import {Http} from "@angular/http";

@Component()
class ContactsApp implements OnInit{

  contacts:Contact[] = [];

  constructor(private http: Http) {}

  ngOnInit() {
    this.http.get('/contacts')
      .map(res => res.json())
      .subscribe(contacts => this.contacts = contacts);
  }
}
