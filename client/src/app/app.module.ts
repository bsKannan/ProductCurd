import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { ProductService } from '../app/product.service';

const routes : Routes =[
  {
    path:'products',
    component: ProductComponent
  },
  {
    path: 'product-details/:id',
    component: ProductDetailComponent
  },
  {
    path: 'product-add',
    component: ProductAddComponent
  },
  {
    path: 'product-edit',
    component: ProductEditComponent
  },
  { path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
