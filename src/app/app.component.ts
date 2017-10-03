import { Component } from '@angular/core';

import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('resize-side-menu', [
      state('large', style({
        width: '200px'
      })),
      state('small', style({
        width: '64px'
      })),
      transition('small => large', animate('100ms', keyframes([
        style({ width: '200px' })
      ]))),
      transition('large => small', animate('100ms', keyframes([
        style({ width: '64px' })
      ]))),
    ]),


    trigger('resize-side-content', [
      state('large', style({
        width: 'calc(100% - 200px)'
      })),
      state('small', style({
        width: 'calc(100% - 64px)'
      })),
      transition('small => large', animate('100ms', keyframes([
        style({ width: 'calc(100% - 200px)' })
      ]))),
      transition('large => small', animate('100ms', keyframes([
        style({ width: 'calc(100% - 64px)' })
      ]))),
    ]),
  ]
})
export class AppComponent {
  sideMenu = [
    { id: 0, name: 'Profile', link: '#', icon: 'account_circle' },
    { id: 1, name: 'Education', link: '#', icon: 'school' },
    { id: 2, name: 'Experience', link: '#', icon: 'work' },
    { id: 3, name: 'Skill', link: '#', icon: 'code' },
    { id: 4, name: 'Hobby', link: '#', icon: 'videogame_asset' },
    { id: 5, name: 'Contact Me', link: '#', icon: 'question_answer' }
  ];
  state: String = '';
  selectedMenu = 0;

  constructor() {
    if (window.innerWidth > 720) {
      this.state = 'large';
    } else {
      this.state = 'small';
    }
    window.onresize = (e) => {
      if (window.innerWidth > 720) {
        this.state = 'large';
      } else {
        this.state = 'small';
      }
    };
  }


  animateMe() {
    // this.state = (this.state === 'small' ? 'large' : 'small');
  }
}
