import { Component, OnInit, Inject, InjectionToken } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { APP_CONFIG } from 'src/app/configs/app.config';
import { Students, studentClassFactory } from 'src/app/services/student-subjects';

// export const Prefered_Courses = new InjectionToken<string>('course name');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  age: number = 0;
  constructor(
    private userService: UserService,
    @Inject(APP_CONFIG) private localAppConfig,
    // @Inject(UserService) r
    @Inject(Students) private studentClassFactory: string
    ) { 
      console.log('In home constructor', studentClassFactory)
    }

  ngOnInit(): void { 
    // console.log('>>>> This is APP_Config value stored in "localAppConfig" variable in home component: ')   
    // console.log('>>>>', this.localAppConfig)   
    this.age = this.userService.getUserAge();
  }
  add10(): void {
    this.userService.setUserAge(this.age + 10);
    this.age = this.userService.getUserAge();
  }
}
