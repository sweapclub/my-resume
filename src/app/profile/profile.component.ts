import { Component, OnInit } from '@angular/core';

// import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { ProfileInterface } from '../interface/profile.interface';
import { FbService } from '../fb-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // profileCollection: AngularFirestoreCollection<ProfileInterface>;
  profile: Observable<ProfileInterface[]>;

  constructor( private fbs: FbService) {
  }

  ngOnInit() {
    this.profile = this.fbs.getProfile();
  }

  CalculateAge(birthday) {
    const ageDifMs = Date.now() - new Date(birthday).getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);

  }


}
