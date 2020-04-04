import { Injectable, InjectionToken } from '@angular/core';
export const CONNECTION_TYPE = new InjectionToken<string>('ConnectionType');
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
