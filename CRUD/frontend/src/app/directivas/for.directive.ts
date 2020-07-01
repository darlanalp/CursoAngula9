import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myfor]'
})
export class ForDirective implements OnInit {

  /*myforEm => indica qual informação vai ser carregada dos parâmetros passado no html
  e joga para o array de number declarado abaixo*/
  @Input('myforEm') numeros: number[] /*la no html utilizou a palavra "Em" poderia ser qualquer uma */

  /*Injetamos dois itens
   1º ViewContainerRef => vai receber o componente html que ta com a directiva
   2º TemplateRef<any> =>  a informação passada no "{{}}"*/
  constructor(private container: ViewContainerRef,
              private template: TemplateRef<any>
  ) 
  {}

  /*Aqui utilizamos o onInit, mas tem outros que poderia ser utilizado, por exemplo,
  onchange (estudar mais sobre)*/
  ngOnInit(): void {
    /*O for vai criar os componentes conforme a quantidade de numeros passado
    nos parametros da directiva no html*/
    for(let number of this.numeros){
      /*createEmbeddedView = > Cria um elemento na DOM, e ai cria o elemento 
      que ta na directiva
       $implicit: number => la no html colocamos o {{n}}
       e ai vai ser o valor que estamos percorrendo no "for"*/
      this.container.createEmbeddedView(this.template, 
                                        {$implicit: number});
    }

  }

}
