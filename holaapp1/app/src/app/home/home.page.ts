import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonButton
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButton
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