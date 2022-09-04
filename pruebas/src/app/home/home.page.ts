import { Component, OnInit } from '@angular/core';
import { FotosService } from './fotos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public fotos = []

  constructor(private fotosService:FotosService) {}

  ngOnInit(): void {
    this.fotosService.getFotos().subscribe(res => {
      this.fotos = res.body
    })  
  }

}
