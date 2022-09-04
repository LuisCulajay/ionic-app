import { Component, OnInit } from '@angular/core';
import { PlacesService } from './places.service';


@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  public lugares = []

  constructor(private service: PlacesService) { }

  ngOnInit() {
    this.lugares = this.service.obtenerLugares()
  }

}
