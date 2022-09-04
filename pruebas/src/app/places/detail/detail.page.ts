import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'  // Obtener los parametros de la URL
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  public lugar:Place

  constructor(private activatedRoute: ActivatedRoute, private placeService: PlacesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      let idLugar = param.get("placeId")    // definido en el app-routing
      
      this.lugar = this.placeService.obtenerLugar(idLugar)
      console.log(this.lugar)
    })
  }

}
