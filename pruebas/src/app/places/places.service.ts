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
      titulo: "Nuevo lugar",
      imagen: 'https://www.educapeques.com/wp-content/uploads/2013/01/estatua-de-la-libertad.jpg',
      comentarios: []
    }
  ]

  constructor() { }

  obtenerLugares() {
    return [...this.lugares]  // copia del arreglo
  }

  obtenerLugar(id: number) {
    // find retorna el objeto (lugar) que coincida con la condición lugar.id == id
    return {
      ...this.lugares.find(lugar => {
        return lugar.id == id
      })
    }
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
    // filter retorna los valores (lugar) que coincidan con la condición lugar.id != id
    this.lugares = this.lugares.filter(lugar => {
      return lugar.id != id
    })
  }
}
