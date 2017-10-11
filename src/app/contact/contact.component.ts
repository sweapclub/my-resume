import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { ContactInterface } from '../interface/contact.interface';

import { FbService } from '../fb-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts: Observable<ContactInterface[]>;
  constructor(private fs: FbService) { }

  ngOnInit() {
    this.contacts = this.fs.getContact();
  }

}
