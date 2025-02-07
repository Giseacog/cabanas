import { Component } from '@angular/core';

@Component({
  selector: 'app-estancias',
  imports: [],
  templateUrl: './estancias.component.html',
  styleUrl: './estancias.component.css'
})
export class EstanciasComponent {
  title = 'ESTANCIAS';
  adosadoColorido={
  image: '',
  nombre: 'ADOSADO COLORIDO',
  descripcion: 'DESCANSAR Y RETIRARSE EN UNA CASA CON LA MEJOR COMUNIDAD',
}
plazaBonasa={
  image:'',
  nombre: 'PLAZA BONANZA',
  descripcion: 'MIRA EL OCEANO, ESCUCHA LAS OLAS Y DISFRUTA EL MAR',
}
santuarioAntiguo={
  image:'',
  nombre: 'SANTUARIO ANTIGUO',
  descripcion: 'ENCUENTRA LA CASA DE TUS SUENOS CERCA DEL COLEGIO Y DE TU OFICINA',
}
}