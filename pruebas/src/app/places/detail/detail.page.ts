import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'  // Obtener los parametros de la URL
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  public lugar:Place

  constructor(private activatedRoute: ActivatedRoute, private placeService: PlacesService, 
    private router:Router, private alertController: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      let idLugar = param.get("placeId")    // definido en el app-routing
      this.lugar = this.placeService.obtenerLugar(parseInt(idLugar))
      console.log(this.lugar)
    })
  }

  async borrarLugar() {
    // Crear la alerta y guardarla
    const alerta = await this.alertController.create({
      header: '¿Desea eliminar el lugar?',
      message: 'No podrá ser recuperado',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Borrar',
          handler: () => {
            this.router.navigate(['/places'])
            this.placeService.borrarLugar(this.lugar.id)
          }
        }
      ]
    })

    await alerta.present()
  }

}
