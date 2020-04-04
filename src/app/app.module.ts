import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { Students, studentClassFactory } from './services/student-subjects';
import { DirectiveTestComponent } from './components/directive-test/directive-test.component';
import { BoxWidgetDirective } from './directives/attribute/box-widget.directive';

import { AnimalService, CONNECTION_TYPE } from './services/animal.service';
import { MonkeyService } from './services/monkey.service';
import { FormsModule } from '@angular/forms';
import { CustomEmailValidatorDirective } from './directives/validators/custom-email-validator.directive';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProductListComponent,
    DirectiveTestComponent,
    BoxWidgetDirective,
    CustomEmailValidatorDirective,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [
    { provide: UserService, useClass: UserService },
    { provide: APP_CONFIG, useValue: DI_CONFIG },

    { provide: Students, useFactory: studentClassFactory(20), deps: [UserService] },


    //Multi
    { provide: AnimalService, useClass: AnimalService, multi: true },
    { provide: AnimalService, useClass: MonkeyService, multi: true },

    //useFactory
    {
      provide: CONNECTION_TYPE,
      useFactory: () => {
        const userConnection = navigator['connection'];      
        return userConnection['effectiveType'] 
      }
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }