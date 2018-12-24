import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApihttpService } from './../services/apihttp.service';
import { environment } from './../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ApicompService {
   //env: String = '';
  //  env: String = 'http://localhost:3000';
  env: String = environment.ruta_backend;
  constructor(private http: HttpClient, private api: ApihttpService) { }

  Solicitar_componentes () {
    const opciones = {
      headers: new HttpHeaders ({
        Authorization: this.api.token
      })
    };

    return this.http.get<any>(`${this.env}/api/componentes`, opciones);
  }

  Obtener_componente (id: String) {
    const opciones = {
      headers: new HttpHeaders ({
        Authorization: this.api.token
      })
    };
    return this.http.get<any>(`${this.env}/api/componentes/${id}`, opciones);
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

  Modificar_componente (id: String, valores: any) {
    const opciones = {
      headers: new HttpHeaders ({
        Authorization: this.api.token
      })
    };
    return this.http.put<any>(`${this.env}/api/componentes/${id}`, valores, opciones);
  }

  Obtener_movimientos (id: String) {
    const opciones = {
      headers: new HttpHeaders ({
        Authorization: this.api.token
      })
    };
    return this.http.get<any>(`${this.env}/api/movimientos/${id}`, opciones);
  }

  Crear_movimiento (id: String, valores: any) {
    const opciones = {
      headers: new HttpHeaders ({
        Authorization: this.api.token
      })
    };
    const valoresMov = {
      componente: id,
      almacen: valores.almacen,
      cantidad: valores.cantidad,
      estado: valores.estado
    }
    console.log('Mov:', valoresMov);
    return this.http.post<any>(`${this.env}/api/movimientos`, valoresMov, opciones);
  }

}
