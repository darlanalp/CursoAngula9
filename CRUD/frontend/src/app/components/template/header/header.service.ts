import { HeaderData } from './../footer/header-data';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  //BehaviorSubject = é um obsercado que sempre emiTe evento quando a classe é modificada  
  _headerData = new BehaviorSubject<HeaderData>({
    title:"Início",
    icon : "home",
    routerUrl: ""
  })

  constructor() { }

  get haderData(): HeaderData{
    return this._headerData.value
  }

  set headerData(headerData: HeaderData){
    this._headerData.next(headerData)
  }
}
