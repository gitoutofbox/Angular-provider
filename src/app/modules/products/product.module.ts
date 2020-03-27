import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatedUserService } from 'src/app/services/updated-user.service';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from "./components/product-list/product-list.component"
const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  }];


@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
