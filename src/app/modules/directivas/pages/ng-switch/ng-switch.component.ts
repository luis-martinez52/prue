import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})
export class NgSwitchComponent{
  opcion : number = 0;
  tipoAlerta: string = "danger";
  //primer tipo de alerta
  mostrarAlert(op: number): void{
    this.opcion = op;
    switch (op){
      case 1:{
        Swal.fire('Buen trabajo', `Esta es la opción ${this.opcion}`,'success');
        break;
      };
      case 2:{
        Swal.fire({
          position:'top-end',
          title:'Buen trabajo',
          text: `Esta es la opcion ${this.opcion}`,
          icon: 'warning',
        });
        break;  
      };
      case 3:{
        const alert = Swal.mixin({
         customClass:{
          confirmButton:'btn btn-success',
          cancelButton: 'btn btn-danger'
         },
         buttonsStyling: false 
        })
        alert.fire({
          title: 'Estas seguro?',
          text:`¡No podras revertir esto! ${this.opcion}`,
          icon:'warning',
          showCancelButton: true,
          confirmButtonText: 'Si, Borrar',
          cancelButtonText:'No, cancelar!',
          reverseButtons: true
        }).then((result) =>{
          if(result.isConfirmed){
            alert.fire(
              'Eliminado!',
              'El Registro ha sido eliminado',
              'success'
            )
          }else if(
            result.dismiss === Swal.DismissReason.cancel
          ){
            alert.fire(
              'Cancelado',
              'Registro almacenado :)',
              'error'
            )
          }
        });
        break;
      }
      case 4:{
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar:true,
          didOpen:(toast) => {
            toast.addEventListener('mouseenter',Swal.stopTimer)
            toast.addEventListener('mouseleave',Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon:'success',
          title: 'Guardado con Exito!'
        }); break;
      };
      default:{
        Swal.fire({
          icon: 'error',
          title:'Oops...',
          text: '¡Algo salio mal!',
          footer:'<a href="">Por que tengo este problema?</a>'
        })
        break;
      };
    }
  }
  get random(): number{
    return Math.trunc(Math.random()*(6)+1);
  }

  get alerta():string{
    //para generar un numero aleatorio
    let n:number = this.random;
    //del numero solo tomamos la parte entera
    switch(n){
      case 1: this.tipoAlerta="primary"; break;
      case 2: this.tipoAlerta="secondary"; break;
      case 3: this.tipoAlerta="success"; break;
      case 4: this.tipoAlerta="danger"; break;
      case 5: this.tipoAlerta="warning"; break;
      case 6: this.tipoAlerta="info"; break;
      default: this.tipoAlerta="danger"; break;
    }
    return this.tipoAlerta;
  }
}
