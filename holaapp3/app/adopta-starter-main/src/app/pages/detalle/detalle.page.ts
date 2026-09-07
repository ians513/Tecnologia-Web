import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IonBackButton,
  IonBadge,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Perro, PerrosService } from '../../services/perros.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonBackButton,
    IonBadge,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
  ],
})
export class DetallePage {
  perro: Perro | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private perrosService: PerrosService,
  ) {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.perro = this.perrosService.obtener(id);
  }

  confirmarAdopcion(): void {
    if (this.perro) {
      this.perrosService.adoptar(this.perro.id);
    }
  }

  volverAlInicio(): void {
    this.router.navigate(['/']);
  }
}
