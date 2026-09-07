import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Perro, PerrosService } from '../../services/perros.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: 'nuevo.page.html',
  styleUrls: ['nuevo.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonBackButton,
    IonButton,
    IonButtons,
    IonCheckbox,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonTitle,
    IonToolbar,
  ],
})
export class NuevoPage {
  perro: Perro = {
    id: 0,
    nombre: '',
    tipo: 'Perro',
    raza: '',
    edad: '',
    sexo: '',
    tamano: '',
    vacunada: false,
    descripcion: '',
    foto: '',
    adoptado: false,
  };

  constructor(
    private perrosService: PerrosService,
    private router: Router,
  ) {}

  guardar(): void {
    const perros = this.perrosService.todas();
    const ultimoId = perros.length ? Math.max(...perros.map((perro) => perro.id)) : 0;

    this.perro.id = ultimoId + 1;
    this.perrosService.agregar({ ...this.perro });
    this.router.navigate(['/']);
  }
}
