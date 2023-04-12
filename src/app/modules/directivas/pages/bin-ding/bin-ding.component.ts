import { Component } from '@angular/core';

@Component({
  selector: 'app-bin-ding',
  templateUrl: './bin-ding.component.html',
  styleUrls: ['./bin-ding.component.scss']
})
export class BinDingComponent{
//cambiamos la propiedad disbled del input y del button
habilitar: boolean = false;
//cambiamos la propiedad class al button
clase: string='btn btn-danger'
//para cambiar la propiedad placheholder
txtPlaceHolder : string = 'Su nombre';
//para cmabiar la propiedad del tipo de input
txtType:string='radio';
//cambiar la propiedad checked
isChecked:boolean=true;

cambiarPropiedad(){
  this.habilitar=!this.habilitar;
  this.txtPlaceHolder='Deshabilitado';
  this.txtType='checkbox';
  this.isChecked=!this.isChecked;
  this.clase='btn btn-primary';
}
}
