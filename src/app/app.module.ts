import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './contact/contact.component';

import { UserService } from 'src/app/services/user.service';
import { APP_CONFIG } from './configs/app.config';
import { ProductListComponent } from './modules/products/components/product-list/product-list.component';

let APP_CONFIG_updated = APP_CONFIG;
APP_CONFIG_updated.serviceURL = 'http://google.com/api/';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {provide: UserService, useClass: UserService},
    { provide: APP_CONFIG, useValue: APP_CONFIG_updated }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
