import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComproyectoService } from './../../services/comproyecto.service';
import { ProyectosService } from './../../services/proyectos.service';

import { TipoProyecto } from '../../interfaces/proyecto.interface';
import { TipoComProyecto } from '../../interfaces/comproyecto.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';




@Component({
  selector: 'app-detalle-proyecto',
  templateUrl: './detalle-proyecto.component.html',
  styleUrls: ['./detalle-proyecto.component.css']
})
export class DetalleProyectoComponent implements OnInit {
  idProyecto: String;
  proyectoCompleto: {
    proyecto: TipoProyecto,
    comProyecto: TipoComProyecto[]
  };

  formularioProyecto: FormGroup;

  constructor(private activatedroute: ActivatedRoute, private router: Router, comproyectoService: ComproyectoService, private proyectosService: ProyectosService) {
    this.formularioProyecto = new FormGroup({
      codLista: new FormControl ('', [Validators.required, Validators.minLength(3)]),
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)])
    });    
    this.activatedroute.params.subscribe(params => {
      if (!params.id) {
        router.navigate(['/']);
      }
      this.idProyecto = params.id;
      console.log(params.id);
    });
    
    comproyectoService.Obtener_proyecto_completo(this.idProyecto)
      .then(respuesta => {
        this.proyectoCompleto = respuesta;
        this.formularioProyecto.setValue({
          nombre: this.proyectoCompleto.proyecto.nombre,
          codLista: this.proyectoCompleto.proyecto.codLista
        });
        console.log(this.proyectoCompleto);
      })
      .catch(err => {
        console.log('Error:', err);
      });

   }

   Modificar_proyecto =  () => {
     this.proyectosService.Modificar_proyecto(this.idProyecto, this.formularioProyecto.value)
     .then(data => {
       console.log(data);
     })
     .catch(err => {
       alert('Error modificando codLista');
     });
   }

   Detalle = (id: String) => {
    this.router.navigate(['modcompproy', this.idProyecto, id]);
   }

  ngOnInit() {
  }

}
