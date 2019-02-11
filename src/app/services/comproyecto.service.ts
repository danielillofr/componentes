import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApihttpService } from './../services/apihttp.service';
import { environment } from './../../environments/environment';
import { TipoComProyecto, TipoRespuestaComProyecto } from './../interfaces/comproyecto.interface';
import { TipoProyecto, TipoRespuestaProyectos } from './../interfaces/proyecto.interface';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ComproyectoService {
  env: String = environment.ruta_backend;
  opciones: {} = {};

  constructor(private apihttp: ApihttpService, private http: HttpClient, private router: Router) {
    if (!apihttp.logueado) {
      router.navigate(['/']);
    }
  }

  Obtener_componente_proyecto = (idComponente: String) => {
    const opciones = {
      headers: new HttpHeaders ({
        Authorization: this.apihttp.token
      })
    };
    return new Promise((resolve, reject) => {
      this.http.get<TipoRespuestaComProyecto>(`${this.env}/api/prcomponentes/${idComponente}`, opciones).subscribe(data => {
        if (!data.ok) {
          if (data.errBaseDatos) {
            reject ('Error en base de datos');
          }
          reject (data.err);
        }
        resolve (<TipoComProyecto>data.prcomponente);
        }, (err) => {
          reject (err);
      })
    })
  }

  Obtener_proyecto = (id: String) => {
    const opciones = {
      headers: new HttpHeaders ({
        Authorization: this.apihttp.token
      })
    };
    return new Promise((resolve, reject) => {
      this.http.get<TipoRespuestaProyectos>(`${this.env}/api/proyectos/${id}`, opciones).subscribe(data => {
        // resolve (data);
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

  Obtener_componentes_proyecto = (id: String) => {
    const opciones = {
      headers: new HttpHeaders ({
        Authorization: this.apihttp.token
      })
    };
    return new Promise((resolve, reject) => {
      this.http.get<TipoRespuestaComProyecto>(`${this.env}/api/prcomponentes/proyecto/${id}`, opciones).subscribe(data => {
        // resolve (data);
        console.log('Datos:::', data);
       if (!data.ok) {
        if (data.errBaseDatos) {
          reject ('Error en base de datos');
        }
        reject (data.err);
      }
      resolve (<TipoComProyecto[]>data.prcomponentes);
      }, (err) => {
        reject (err);
      });
    });
  }


  Obtener_proyecto_completo = async(id: String) => {
    const proyecto = await this.Obtener_proyecto(id);
    const comProyecto = await this.Obtener_componentes_proyecto(id);
    return {
      proyecto: <TipoProyecto>proyecto,
      comProyecto: <TipoComProyecto[]>comProyecto
    };
  }

  Guardar_componente_proyecto = (id: String, comProyecto: TipoComProyecto) => {
    const opciones = {
      headers: new HttpHeaders ({
        Authorization: this.apihttp.token
      })
    };
    return new Promise((resolve, reject) => {
      this.http.post<TipoRespuestaComProyecto>(`${this.env}/api/prcomponentes`, comProyecto, opciones).subscribe(data => {
        if (!data.ok) {
          if (data.errBaseDatos) {
            reject ('Error en base de datos');
          }
          reject (data.err);
        }
        resolve (<TipoComProyecto[]>data.prcomponentes);
        }, (err) => {
          reject (err);
        });
    });
  }

  Actualizar_componente_proyecto = (id: String, datos: any) => {
    const opciones = {
      headers: new HttpHeaders ({
        Authorization: this.apihttp.token
      })
    };
    return new Promise((resolve, reject) => {
      this.http.put<TipoRespuestaComProyecto>(`${this.env}/api/prcomponentes/${id}`, datos, opciones).subscribe(data => {
        if (!data.ok) {
          if (data.errBaseDatos) {
            reject ('Error en base de datos');
          }
          reject (data.err);
        }
        resolve (<TipoComProyecto>data.prcomponente);
        }, (err) => {
          reject (err);
        });
    });
  }

}
