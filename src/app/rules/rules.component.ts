import { Component } from '@angular/core';

@Component({
  selector: 'app-rules',
  imports: [],
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.css'
})
export class RulesComponent {
  title= 'QUE DEBES SABER';
  reglasaSeguir={
    name: 'REGLAS DE LA CASA',
    rule1: 'LLEGADA A PARTIR DE LAS 3:00 P.M.',
    rule2: 'SALIDA ANTES DE LAS 1:00 P.M.',
    rule3: 'NO SE ADMITEN MASCOTAS',
    learnMoreText: 'SABER MAS',
    learnMoreLink: 'https://www.airbnb.com/help/article/695/what-are-the-basic-requirements-to-book-on-airbnb'
}
seguridadYPropiedad={
  name: 'SEGURIDAD Y PROPIEDAD',
  rule1: 'NO HAY ALARMA DE HUMO',
  rule2: 'ALBERCA/JACUZZI SIN REJA, NI PUERTA CON LLAVE',
  rule3: 'NO SE REQUIERE DETECTOR DE MONOXIDO DE CARBONO', 
  learnMoreText: 'SABER MAS',
  learnMoreLink: 'https://www.airbnb.com/help/article/695/what-are-the-basic-requirements-to-book-on-airbnb',
} 
politicasDeCancelacion={
  name: 'POLITICAS DE CANCELACION',
  rule1: 'SI CANCELAS ANTES DE LA FECHA DE LLEGADA (5ENE), RECIBIRAS UN REEMBOLSO PARCIAL',
  rule2: 'PASA ESE PLAZO, TUE REEMBOLSO DEPENDERA DE CUANDO CANCELES',
  learnMoreText: 'SABER MAS',
  learnMoreLink: 'https://www.airbnb.com/help/article/695/what-are-the-basic-requirements-to-book-on-airbnb',

}
}