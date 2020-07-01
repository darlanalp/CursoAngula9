import { Product } from './../product.model';
import { NavComponent } from './../../template/nav/nav.component';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product : Product = {
    name : '',
    price: null
  }

  //Injeção de dependência => private productService : ProductService,  o  angular automaticamente
  //ja injeta um ProductService
  constructor(private productService : ProductService, 
              private router : Router) { }

  ngOnInit(): void {
    
  }

  createProduct():void{

    //Como o create retorna Observable vou criar um subscriber 
    //para ser disparado quando a requisição for realizada
    this.productService.create(this.product).subscribe( ()=>{

      this.productService.showMessage("Produto criado!")
      //Volta para a tela principal
      this.router.navigate(['/products']);
    });
    
  }

  cancel():void{
    
    this.router.navigate(["/products"])
  }

 
}
