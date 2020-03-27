import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private age: number = 10;
  constructor() { }
  
  getUserAge (): number {
    return this.age;
  }

  setUserAge(age: number):void {
    this.age = age;
  }
}
