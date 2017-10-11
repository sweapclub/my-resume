import { Component, OnInit } from '@angular/core';

import {FbService} from '../fb-service.service';
import {SkillInterface} from '../interface/skill.interface';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skills: Observable<SkillInterface[]>;
  constructor(private fs: FbService) { }

  ngOnInit() {
    this.skills = this.fs.getSkill();
  }

}
