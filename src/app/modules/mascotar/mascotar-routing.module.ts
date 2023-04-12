import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@modules/home/pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';

const routes: Routes = [
  {path:'',component:HomeComponent,title:'Home'},
  {path:'listar',component:ListarComponent,title:'listar'}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MascotarRoutingModule { }
