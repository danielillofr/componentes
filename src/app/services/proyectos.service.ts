import { Injectable } from '@angular/core';
import { TipoProyecto, TipoRespuestaProyectos } from './../interfaces/proyecto.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApihttpService } from './../services/apihttp.service';
import { environment } from './../../environments/environment';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';


@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  env: String = environment.ruta_backend;
  constructor(private apihttp: ApihttpService, private http: HttpClient ) {}



  Obtener_proyectos = () => {
    const opciones = {
      headers: new HttpHeaders ({
        Authorization: this.apihttp.token
      })
    };
    return new Promise((resolve, reject) => {
      this.http.get<TipoRespuestaProyectos>(`${this.env}/api/proyectos`, opciones).subscribe(data => {
        // resolve (data);
       if (!data.ok) {
        if (data.errBaseDatos) {
          reject ('Error en base de datos');
        }
        reject (data.err);
      }
      resolve (<TipoProyecto[]>data.proyectos);
      }, (err) => {
        reject (err);
      });
    });
  }

  Eliminar_proyecto = (id: String) => {
    const opciones = {
      headers: new HttpHeaders ({
        Authorization: this.apihttp.token
      })
    };
    return new Promise((resolve, reject) => {
      this.http.delete<any>(`${this.env}/api/proyectos/${id}`, opciones).subscribe(data => {
        if (!data.ok) {
          if (data.errBaseDatos) {
            reject ('Error en base de datos');
          }
          reject (data.err);
        }
        resolve (data.ok);
        }, (err) => {
          reject (err);
        });
    });
  }

  Modificar_proyecto = (id: String, datos: any) => {
    const opciones = {
      headers: new HttpHeaders ({
        Authorization: this.apihttp.token
      })
    };

    return new Promise((resolve, reject) => {
      this.http.put<TipoRespuestaProyectos>(`${this.env}/api/proyectos/${id}`, datos, opciones).subscribe(data => {
        if (!data.ok) {
          if (data.errBaseDatos) {
            reject ('Error en base de datos');
          }
          reject (data.err);
        }
        resolve (data.proyecto);
        }, (err) => {
          reject (err);
        });
    });
  }

  Crear_proyecto = (nombre: String) => {
    const opciones = {
      headers: new HttpHeaders ({
        Authorization: this.apihttp.token
      })
    };
    const datos = {
      nombre
    };
    return new Promise((resolve, reject) => {
      this.http.post<TipoRespuestaProyectos>(`${this.env}/api/proyectos`, datos, opciones).subscribe(data => {
        if (!data.ok) {
          if (data.errBaseDatos) {
            reject ('Error en base de datos');
          }
          reject (data.err);
        }
        resolve (<TipoProyecto>data.proyecto);
        }, (err) => {
          reject (err);
        });
      });
    }
  }
