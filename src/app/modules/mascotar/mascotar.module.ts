import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotarRoutingModule } from './mascotar-routing.module';
import { CardComponent } from './components/card/card.component';
import { ListarComponent } from './pages/listar/listar.component';



@NgModule({
  declarations: [
    CardComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    MascotarRoutingModule
  ]
})
export class MascotarModule { }
