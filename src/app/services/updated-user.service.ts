import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdatedUserService {
  age = 'Updated age is ' + 100;
  constructor() { }

  getUserAge() {
    return this.age;
  }

  setUserAge(age) {
    this.age = 'Updated age is ' + age;
  }
  
}
