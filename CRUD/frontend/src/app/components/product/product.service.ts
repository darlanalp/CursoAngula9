import { map, catchError } from 'rxjs/operators';
import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable, observable, EMPTY } from 'rxjs';



@Injectable({
  providedIn: 'root' // Indica que a classe é de uma instancia, quando o angular criar ele,
  //fica a mesma instancia durante o momento que aplicação esta sendo executada
  // ou seja, é compartilhado com qualquer componente que chamar ele
})

export class ProductService {

  //No futuro avaliar que isso pode ser uma variavel de ambiente ou global
  baseUrl ="http://localhost:3001/products"

  constructor(private snackBar : MatSnackBar,  private http: HttpClient) { }

  showMessage(msg: string, isError: boolean= false): void{

    //Configuração e apresentação do snackBar do pacote do material
    this.snackBar.open(msg,'X',{
      duration: 3000, //Tempo de duração
      horizontalPosition: "right", //Posição horizontal
      verticalPosition: "top", //Posição vertical
      panelClass: isError ? ['msg-erro'] :['msg-success']
    })
  }

  create(product:Product) : Observable<Product>{

    //Exemplo de requisição utilizando o metodo post

    return this.http.post<Product>(this.baseUrl,product).pipe(

      map(obj => obj),
      catchError(e => this.errorHandler(e))

    ); // retorna um observable de produtos
  }

  errorHandler(e: any): Observable<any>{

     this.showMessage(e.message, true);
     return EMPTY
  }

  read() : Observable<Product[]>{

    //Exemplo de requisição utilizando o metodo get

    return this.http.get<Product[]>(this.baseUrl).pipe(

      map(obj => obj),
      catchError(e => this.errorHandler(e))

    ); // retorna um observable de produtos
  }

  readById(id: number) : Observable<Product>{
    //Concatenando a url para realizar o get do produto
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }

  update(product : Product):Observable<Product>{

    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe(

      map(obj => obj),
      catchError(e => this.errorHandler(e))

    )
    
  }

  delete(id: number) : Observable<Product>{

    //Concatenando a url para realizar o get do produto
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url).pipe(

      map(obj => obj),
      catchError(e => this.errorHandler(e))

    )

  }
}
