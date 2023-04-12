import { Injectable } from '@angular/core';
import { IMascota } from '../interface/mascostas.interface';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  constructor() { }
  /*buscarMascota(termino:string ):Observable<IMascota[]>{
    if(termino.length>1){
     // return this.http.get<IMascota[]>(`${this.baseUrl}-mascotar/?=${termino}&?limit=5`);
    }
  }*/
}
