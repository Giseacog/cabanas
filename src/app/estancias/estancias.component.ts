import { Component } from '@angular/core';

@Component({
  selector: 'app-estancias',
  imports: [],
  templateUrl: './estancias.component.html',
  styleUrl: './estancias.component.css'
})
export class EstanciasComponent {
  adosadoColorido={
  image: "/assets/ESTANCIA1.png",
  nombre: 'ADOSADO COLORIDO',
  descripcion: 'DESCANSAR Y RETIRARSE EN UNA CASA CON LA MEJOR COMUNIDAD',
}
plazaBonasa={
  image:"/assets/ESTANCIA2.png",
  nombre: 'PLAZA BONANZA',
  descripcion: 'MIRA EL OCEANO, ESCUCHA LAS OLAS Y DISFRUTA EL MAR',
}
santuarioAntiguo={
  image:"/assets/ESTANCIA3.png",
  nombre: 'SANTUARIO ANTIGUO',
  descripcion: 'ENCUENTRA LA CASA DE TUS SUENOS CERCA DEL COLEGIO Y DE TU OFICINA',
}
}