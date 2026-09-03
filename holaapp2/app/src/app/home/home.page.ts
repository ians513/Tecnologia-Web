import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

import {
  IonContent,
  IonItem,
  IonInput,
  IonButton
} from '@ionic/angular';

import { EncabezadoComponent } from '../components/encabezado/encabezado.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterOutlet,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    EncabezadoComponent
  ]
})
export class HomePage {

  nombre = '';
  ciudad = '';
  mensaje = '';
  yaSaludo = false;

  saludar() {
    if (this.ciudad.trim() !== '') {
      this.mensaje = `Hola ${this.nombre}, veo que eres de ${this.ciudad}!`;
    } else {
      this.mensaje = `Hola ${this.nombre}!`;
    }

    this.yaSaludo = true;
  }
}