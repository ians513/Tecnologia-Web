import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { TarjetaPerroComponent } from '../../components/tarjeta-perro/tarjeta-perro.component';
import { Perro, PerrosService } from '../../services/perros.service';

@Component({
  selector: 'app-galeria',
  templateUrl: 'galeria.page.html',
  styleUrls: ['galeria.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonRow,
    IonTitle,
    IonToolbar,
    TarjetaPerroComponent,
  ],
})
export class GaleriaPage {
  perros: Perro[] = [];

  constructor(
    private router: Router,
    private perrosService: PerrosService,
  ) {}

  ionViewWillEnter(): void {
    this.perros = this.perrosService.todas();
  }

  adoptar(id: number): void {
    this.router.navigate(['/detalle', id]);
  }

  agregarPerrito(): void {
    this.router.navigate(['/nuevo']);
  }
}
