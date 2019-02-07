import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApihttpService } from './../services/apihttp.service';
import { environment } from './../../environments/environment';
import { async } from 'q';



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
      estado: valores.estado,
      motivo: valores.motivo
    }
    console.log('Mov:', valoresMov);
    return this.http.post<any>(`${this.env}/api/movimientos`, valoresMov, opciones);
  }

  //PARA PROTOTIPOS

  Obtener_proyectos() {
    const opciones = {
      headers: new HttpHeaders ({
        Authorization: this.api.token
      })
    };
    return this.http.get<any>(`${this.env}/api/proyectos`,opciones);
  }


  promesaOP = () => {
    const opciones = {
      headers: new HttpHeaders ({
        Authorization: this.api.token
      })
    };
    return new Promise((resolve,reject) => {
      this.http.get<any>(`${this.env}/api/proyectos`,opciones).subscribe(data => {
        resolve (data);
      }, (err) => {
        reject (err);
      })
    })
  }


  pruebaProm = async() => {
    let datos = await <any>this.promesaOP().catch(err => {
      console.log('Error otro:', err.message);
      throw new Error('Error accediendo a la base de datos');
    });
    console.log('Datos:', datos);
    if (!datos.ok) {
      if (datos.errBaseDatos) {
        throw new Error('Error en base de datos');
      }
      throw new Error(datos.err);
    }
    return datos.proyectos;

  }




}





