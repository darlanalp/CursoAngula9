import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';


const routes: Routes = [
  {
   path:"", /*Vazio indica que é a rota raiz*/
   component: HomeComponent /*Indica qual é o componente da rota raiz*/
  },
  {
    path:"products", 
    component: ProductCrudComponent /*Indica qual é o componente da rota*/
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
