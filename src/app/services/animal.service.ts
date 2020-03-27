import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  public name: string = 'Animal';
  public eats: string = 'Food';
  constructor() { }
  
  getName (): string {
    return this.name;
  }
  getEats (): string {
    return this.eats;
  }

 
}
