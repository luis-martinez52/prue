import { Component, Input } from '@angular/core';
import { IMascota } from '@modules/mascotar/interface/mascostas.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() obj!:IMascota

}
