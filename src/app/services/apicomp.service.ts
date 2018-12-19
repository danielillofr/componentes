import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApihttpService } from './../services/apihttp.service';


@Injectable({
  providedIn: 'root'
})
export class ApicompService {
   //env: String = '';
   env: String = 'http://localhost:3000';

  constructor(private http: HttpClient, private api: ApihttpService) { }

  Solicitar_componentes () {
    const opciones = {
      headers: new HttpHeaders ({
        Authorization: this.api.token
      })
    };

    return this.http.get<any>(`${this.env}/api/componentes`, opciones);
  }

  Crear_componente (comp: any) {
    const opciones = {
      headers: new HttpHeaders ({
        Authorization: this.api.token
      })
    };
    return this.http.post<any>(`${this.env}/api/componentes`,comp, opciones);
  }
  Eliminar_componente (id: String) {
    const opciones = {
      headers: new HttpHeaders ({
        Authorization: this.api.token
      })
    };
    return this.http.delete<any>(`${this.env}/api/componentes/${id}`, opciones);
  }
}
