import { Component, OnInit } from '@angular/core';
import { FbService } from '../fb-service.service';

import { Observable } from 'rxjs/Observable';
import { ExperienceInterface } from '../interface/experience.interface';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences: Observable<ExperienceInterface[]>;

  constructor(private fb: FbService) { }

  ngOnInit() {
    this.experiences = this.fb.getExperience();
    console.log(this.experiences);
  }

}
