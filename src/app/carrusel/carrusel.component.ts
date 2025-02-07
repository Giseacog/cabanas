import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  imports: [],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {
  imagen:string="/Casaportada.webp";

  colocarImagen(num:number):void{

    switch(num){
      case 1: this.imagen="assets/Casa1.webp"; break;
      case 2: this.imagen="assets/recamara.webp"; break;
      case 3: this.imagen="assets/sala.webp"; break;
    }
  }

}

