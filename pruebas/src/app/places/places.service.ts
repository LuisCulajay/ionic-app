import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  // https://www.positronx.io/create-ionic-angular-http-service/

  public lugares:Place[] = [
    {
      id: 0,
      titulo: "Torre Eiffel",
      imagen: 'https://cdn.culturagenial.com/es/imagenes/torre-eiffel-cke.jpg',
      comentarios: ['francia', 'paris', 'hola']
    },
    {
      id: 1,
      titulo: "Estatua de la Libertad",
      imagen: 'https://www.educapeques.com/wp-content/uploads/2013/01/estatua-de-la-libertad.jpg',
      comentarios: ['EEUU', 'estatua', 'verde']
    },
    {
      id: 2,
      titulo: "Estatua de la Libertad",
      imagen: 'https://www.educapeques.com/wp-content/uploads/2013/01/estatua-de-la-libertad.jpg',
      comentarios: []
    }
  ]

  constructor() { }

  obtenerLugares() {
    return [...this.lugares]  // copia del arreglo
  }

  obtenerLugar(id: string) {
    return {...this.lugares[parseInt(id)]}
  }

  agregarLugar(titulo:string, imagen:string) {
    this.lugares.push({
      id: this.lugares.length,
      titulo: titulo,
      imagen: imagen,
      comentarios: []
    })
  }

  borrarLugar(id:number) {
    this.lugares.splice(id, 1)
  }
}
