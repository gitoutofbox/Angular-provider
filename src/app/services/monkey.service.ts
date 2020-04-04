import { Injectable } from '@angular/core';
import { AnimalService } from './animal.service';

@Injectable({
  providedIn: 'root'
})
export class MonkeyService extends AnimalService{
  name = 'Monkey';
  eats = 'Fruits';
  
  constructor() { super()}
  
  getFood() {
    return this.eats;
  }

 
}
