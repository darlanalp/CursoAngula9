import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';


const routes: Routes = [
  {
   path:"", /*Vazio indica que é a rota raiz*/
   component: HomeComponent /*Indica qual é o componente da rota raiz*/
  },
  {
    path:"products", 
    component: ProductCrudComponent /*Indica qual é o componente da rota*/
  },
  {
    path:"products/create", 
    component: ProductCreateComponent /*Indica qual é o componente da rota*/
  },
  {
    path:"products/update/:id", 
    component: ProductUpdateComponent /*Indica qual é o componente da rota*/
  },
  {
    path:"products/delete/:id", 
    component: ProductDeleteComponent /*Indica qual é o componente da rota*/
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
