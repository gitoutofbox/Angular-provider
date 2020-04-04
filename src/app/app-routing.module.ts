import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductListComponent } from './modules/products/components/product-list/product-list.component';
import { DirectiveTestComponent } from './components/directive-test/directive-test.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'directive-test',
    component: DirectiveTestComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  },

  {
    path: 'register', component: RegisterComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
