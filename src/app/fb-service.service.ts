import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { ProfileInterface } from './interface/profile.interface';
import { ExperienceInterface } from './interface/experience.interface';
import { EducationInterface } from './interface/education.interface';
import { AboutMeInterface } from './interface/about-me.interface';
import { SkillInterface } from './interface/skill.interface';
import { ContactInterface } from './interface/contact.interface';

@Injectable()
export class FbService {

  collection: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) { }

  getProfile(): Observable<ProfileInterface[]> {
    this.collection = this.afs.collection('profile');
    return this.collection.valueChanges();
  }

  getExperience(): Observable<ExperienceInterface[]> {
    this.collection = this.afs.collection('experience', ref => {
      return ref.orderBy('order', 'asc');
    });
    return this.collection.valueChanges();
  }

  getEducation(): Observable<ExperienceInterface[]> {
    this.collection = this.afs.collection('education');
    return this.collection.valueChanges();
  }

  getAboutMe(): Observable<AboutMeInterface[]> {
    this.collection = this.afs.collection('aboutMe');
    return this.collection.valueChanges();
  }

  getSkill(): Observable<SkillInterface[]> {
    this.collection = this.afs.collection('skill');
    return this.collection.valueChanges();
  }

  getContact(): Observable<ContactInterface[]> {
    this.collection = this.afs.collection('contact', ref => {
      return ref.orderBy('order', 'asc');
    });
    return this.collection.valueChanges();
  }
}
