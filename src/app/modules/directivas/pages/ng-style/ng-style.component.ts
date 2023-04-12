import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss']
})
export class NgStyleComponent {

  size:number = 14; //para cambiar el tamano de la fuente
  bandera:boolean=true// para activar o desactivar el estilo del boton
  colorEstado:string = '#f00'; //para cambiar de color
  message=1;// para condicionar el estilo

  get color(){
    return '#00f';
  }

}
