import { Component, OnInit } from '@angular/core';
import { IMascota } from '@modules/mascotar/interface/mascostas.interface';
import { MascotasService } from '@modules/mascotar/services/mascotas.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  mascotas : IMascota[] = []; //array de mascotas
  prametroBuscar:string = '';//parametro de busqueda
  //inyectar el servicio
  constructor(private mascotasService: MascotasService) { }

  ngOnInit(): void {
   /* this.mascotasService.mascotas.subscribe((resp)=>{
      this.mascotas = resp;
    })*/
  }
  buscar():void{
    //metodo para buscar
  }
}
