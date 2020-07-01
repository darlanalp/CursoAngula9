import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root' // Indica que a classe é de uma instancia, quando o angular criar ele,
  //fica a mesma instancia durante o momento que aplicação esta sendo executada
  // ou seja, é compartilhado com qualquer componente que chamar ele
})

export class ProductService {

  //No futuro avaliar que isso pode ser uma variavel de ambiente ou global
  baseUrl ="http://localhost:3001/products"

  constructor(private snackBar : MatSnackBar,  private http: HttpClient) { }

  showMessage(msg: string): void{

    //Configuração e apresentação do snackBar do pacote do material
    this.snackBar.open(msg,'X',{
      duration: 3000, //Tempo de duração
      horizontalPosition: "right", //Posição horizontal
      verticalPosition: "top" //Posição vertical
    })
  }

  create(product:Product) : Observable<Product>{

    //Exemplo de requisição utilizando o metodo post

    return this.http.post<Product>(this.baseUrl,product); // retorna um observable de produtos
  }

  read() : Observable<Product[]>{

    //Exemplo de requisição utilizando o metodo get

    return this.http.get<Product[]>(this.baseUrl); // retorna um observable de produtos
  }
}
