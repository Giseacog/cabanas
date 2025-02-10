import { Component } from '@angular/core';
import { Extras } from '../extras'

@Component({
  selector: 'app-reservations',
  imports: [],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css'
})

 export class ReservationsComponent{
  huespedes: number = 1; 
  noches: number = 1;
  precioInicial: number = 1500;
  total: number = this.precioInicial*this.noches+(this.precioInicial - 1)*500

  extra: Extras[]=[
    {name:'MASCOTA', price:'250', moneda:'MXN', selected: false },
    {name:'CALEFACCION', price:'500', moneda:'MXN', selected: false},
    {name:'RUTA DE MONTANA', price:'150', moneda:'MXN', selected: false},
    {name:'SENDERISMO', price:'200', moneda:'MXN', selected: false},
    {name:'VISITA A LA MONTANA', price:'50', moneda:'MXN', selected: false},
  ];
  
  constructor() {
    this.calcularTotal(); // Asegurar que el total se calcule al iniciar
  }

  incrementarHuesped() {
    this.huespedes++;
    this.calcularTotal();
  }

  decrementarHuesped() {
    if (this.huespedes > 1) {
      this.huespedes--;
      this.calcularTotal();
    }
  }

  incrementarNoches() {
    this.noches++;
    this.calcularTotal();
  }

  decrementarNoches() {
    if (this.noches > 1) {
      this.noches--;
      this.calcularTotal();
    }
  }

  toggleExtra(index: number) {
    this.extra[index].selected = !this.extra[index].selected;
    this.calcularTotal();
  }

  calcularTotal() {
    let extrasTotal = this.extra
      .filter(extras => extras.selected)
      .reduce((sum, extra) => sum + extras.price, 0);

    this.total = (this.precioInicial * this.noches) + ((this.huespedes - 1) * 500) + extrasTotal;
  }
}