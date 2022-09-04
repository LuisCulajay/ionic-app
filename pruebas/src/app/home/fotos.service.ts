import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  private httpPOSTOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    observe: "response" as 'body',
  };

  constructor(private http:HttpClient) { }

  getFotos() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/photos?_limit=20', this.httpPOSTOptions);
  }

  postFoto(foto:string) {
    const body = {
      'foto': foto
    }
    return this.http.post<any>('url', body, this.httpPOSTOptions)
  }

}
