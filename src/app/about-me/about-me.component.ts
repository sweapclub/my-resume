import { Component, OnInit } from '@angular/core';

import { FbService } from '../fb-service.service';
import { AboutMeInterface } from '../interface/about-me.interface';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  aboutMe: Observable<AboutMeInterface[]>;
  constructor(private fb: FbService) { }

  ngOnInit() {
    this.aboutMe = this.fb.getAboutMe();
  }

}
