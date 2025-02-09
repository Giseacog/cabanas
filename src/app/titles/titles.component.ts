import { Component } from '@angular/core';

@Component({
  selector: 'app-titles',
  imports: [],
  templateUrl: './titles.component.html',
  styleUrl: './titles.component.css'
})
export class TitlesComponent {
    estancias={
    title: 'ESTANCIAS',
    subtitle: 'MAS DETALLES',
  } 
  estancias2={
    title: 'ESTANCIAS',
    subtitle: 'QUE DEBES SABER',
  }
  queDebesSABER={
    title: 'QUE DEBES SABER',
  }
  inspiracion={
    title:'INSPIRACION PARA FUTURAS ESCAPADAS',
    subtitle:'SIGUE DESCUBIRENDO LA CATEGORIA DE LAS CABANAS',
  }

}
