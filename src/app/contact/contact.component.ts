import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../services/user.service';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  stagger, 
  animateChild,
  state,
  keyframes
} from '@angular/animations';
import { CONNECTION_TYPE } from '../services/animal.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
  animations: [
    trigger(
      'slowConnectionMessage', 
      [
        transition(
          ':enter', [
            style({ transform: 'translateY(-50px)' }),
            animate('0.7s', keyframes([
              style({transform: 'translateY(-50px)', offset: 0}),
              style({transform: 'translateY(0px)', offset: 0.7}),
            ]))
          ]
        ),
        transition(
          ':leave', [
            style({ transform: 'translateY(0px)' }),
            animate('0.5s', keyframes([
              style({transform: 'translateY(0px)', offset: 0}),
              style({transform: 'translateY(-50px)', offset: 0.5}),
            ]))
          ]
        )
      ]
    )
  ]
})
export class ContactComponent implements OnInit {
  age: number = 0;
  isConnectionSlow: boolean = false;
  constructor(
    private userService: UserService,
    @Inject(CONNECTION_TYPE) private connectionType: string
    ) {       
      this.isConnectionSlow = this.connectionType === '2g' ? true : false;
    }

  ngOnInit(): void {    
    this.age = this.userService.getUserAge();
  }

}
