import { Component, OnInit } from '@angular/core';
import {UpdatedUserService } from 'src/app/services/updated-user.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  age: any = '';
  constructor(private updatedUserService: UpdatedUserService) { }

  ngOnInit(): void {
    this.age = this.updatedUserService.getUserAge();
  }
  set() {
    this.updatedUserService.setUserAge(200);
    this.age = this.updatedUserService.getUserAge();
  }
}
