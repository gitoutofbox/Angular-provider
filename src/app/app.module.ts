import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductListComponent } from './modules/products/components/product-list/product-list.component';

import { UserService } from 'src/app/services/user.service';

import { APP_CONFIG } from './configs/app.config';
const DI_CONFIG = {
  apiEndpoint: 'http:/fake/api',
  isMockApi: true
};

// export const DI_CONFIG = new APP_CONFIG('http:/localhost:7000/api', true);

import { Students, studentClassFactory } from './services/student-subjects';
import { DirectiveTestComponent } from './components/directive-test/directive-test.component';
import { BoxWidgetDirective } from './directives/attribute/box-widget.directive';
// export const Prefered_Courses = new InjectionToken<string>('course name');

// export function preferredCoursesFactory(count: number) {
//   return (): string => {
//     return count + 'Hi'
//   };
// };



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProductListComponent,
    DirectiveTestComponent,
    BoxWidgetDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {provide: UserService, useClass: UserService},
    {provide:APP_CONFIG, useValue: DI_CONFIG},
    // { provide: UserService, useFactory: randomFactory },
    { provide: Students, useFactory: studentClassFactory(20),deps: [UserService] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
