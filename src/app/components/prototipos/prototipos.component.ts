import { Component, OnInit } from '@angular/core';
import { ApihttpService } from './../../services/apihttp.service';
import { Router } from '@angular/router';
import { ProyectosService } from './../../services/proyectos.service';
import { TipoProyecto } from './../../interfaces/proyecto.interface';




@Component({
  selector: 'app-prototipos',
  templateUrl: './prototipos.component.html',
  styleUrls: ['./prototipos.component.css']
})
export class PrototiposComponent implements OnInit {

  proyectos: TipoProyecto[] = [];

  constructor(private apihttp: ApihttpService, private router: Router, private proyectosService: ProyectosService) {
    if (!apihttp.logueado)
    {
      router.navigate(['/']);
      return;
    }
    this.proyectosService.Obtener_proyectos().then ((proyectos) => {
      this.proyectos = <TipoProyecto[]>proyectos;
    });

  }

  Eliminar = (id: String, i: number) => {
    this.proyectosService.Eliminar_proyecto(id).then((borrado: Boolean) => {
      if (borrado) {
        this.proyectos.splice(i, 1);
      } else {
        alert ('No borrado');
      }
    }).catch (err => {
      alert (err.message);
    });
  }

  Modificar = (id: String) => {
    this.router.navigate(['detalleproyecto', id]);
  }

  ngOnInit() {
  }

}
