import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from '../profile/profile.component';
import { EducationComponent } from '../education/education.component';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillComponent } from '../skill/skill.component';
import { HobbyComponent } from '../hobby/hobby.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutMeComponent } from '../about-me/about-me.component';

const routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'skill', component: SkillComponent },
  { path: 'hobby', component: HobbyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'aboutMe', component: AboutMeComponent},
  { path: '**', redirectTo: '/profile' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
