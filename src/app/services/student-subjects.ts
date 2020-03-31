import { InjectionToken } from '@angular/core';
import { UserService } from './user.service';

export const Students = new InjectionToken<string>('student name');

export function studentClassFactory(age: number) {
  return (userService: UserService): string => {
    return age == 10 ? 'Class X' : 'Class X+' 
  };
};