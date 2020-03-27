import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  age: number = 0;
  constructor(private userService: UserService) { }

  ngOnInit(): void {    
    this.age = this.userService.getUserAge();
  }

}
