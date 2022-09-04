import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  public titulo:string
  public imagen:string

  constructor(private placeService: PlacesService, private router: Router) { }

  ngOnInit() {
  }

  nuevoLugar() {
    this.placeService.agregarLugar(this.titulo, this.imagen)
    this.router.navigate(['/places'])
  }

}
