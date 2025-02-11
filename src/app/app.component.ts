import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { EstanciasComponent } from './estancias/estancias.component';
import { RulesComponent } from './rules/rules.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { TitulosComponent } from './titulos/titulos.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, EstanciasComponent, RulesComponent, CarruselComponent, ReservationsComponent, TitulosComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project'; 
}

 