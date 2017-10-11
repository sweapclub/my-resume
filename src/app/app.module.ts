import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

import 'hammerjs';
import {
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatButtonModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { FbService } from './fb-service.service';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillComponent } from './skill/skill.component';
import { HobbyComponent } from './hobby/hobby.component';
import { ContactComponent } from './contact/contact.component';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    EducationComponent,
    ExperienceComponent,
    SkillComponent,
    HobbyComponent,
    ContactComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseconfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [FbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
