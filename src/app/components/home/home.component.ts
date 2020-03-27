import { Component, OnInit, Inject } from '@angular/core';
import { APP_CONFIG } from 'src/app/configs/app.config';

import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  age: number = 0;
  constructor(private userService: UserService,
    // @Inject(APP_CONFIG) private appconfig: any
    ) { }

  ngOnInit(): void {    
    this.age = this.userService.getUserAge();
  }
  add10(): void {
    this.userService.setUserAge(this.age + 10);
    this.age = this.userService.getUserAge();
  }
}
