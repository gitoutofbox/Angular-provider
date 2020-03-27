import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UpdatedUserService } from 'src/app/services/updated-user.service';


const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  }
];
 
export const HELLO_MESSAGE = new InjectionToken<string>('Hello!');  

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    // {provide: UserService, useClass: UserService },
    {provide: UserService, useClass: UpdatedUserService },
    // {
    //   provide: UserService, useValue: {
    //     getUserAge: function () {
    //       return 'Hoooked age';
    //     }
    //   }
    // },
    { provide: HELLO_MESSAGE, useValue: 'Hello World!' },    
  ]
})
export class AboutModule { }
