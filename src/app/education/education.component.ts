import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {FbService} from '../fb-service.service';

import {EducationInterface} from '../interface/education.interface';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations: Observable<EducationInterface[]>;

  constructor(private fb: FbService) { }

  ngOnInit() {
    this.educations = this.fb.getEducation();
  }

}
