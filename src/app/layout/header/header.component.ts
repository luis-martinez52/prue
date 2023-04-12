import { Component } from '@angular/core';
import { LOGO } from 'src/app/constants/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  // la variable logo Toma la ruta de la constante.
  logo:string =LOGO;

}