import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
  age: number = 0;
  
  constructor(
    private userService: UserService,
    ) { }

  ngOnInit(): void {
    this.age = this.userService.getUserAge();
  }

}
