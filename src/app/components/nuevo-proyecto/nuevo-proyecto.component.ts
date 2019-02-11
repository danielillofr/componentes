import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProyectosService } from './../../services/proyectos.service';
import { Router } from '@angular/router';
import { ApihttpService } from './../../services/apihttp.service';




@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {

  formulario: FormGroup;

  constructor(private proyectoservice: ProyectosService, private router: Router, private apihttp: ApihttpService) {
    if (!this.apihttp.logueado) {
      this.router.navigate(['/']);
    }
    this.formulario = new FormGroup ({
      nombre: new FormControl ('', [Validators.required, Validators.minLength(3)])
    });
  }

  Guardar = () => {
    console.log(this.formulario.value.nombre);
    this.proyectoservice.Crear_proyecto(this.formulario.value.nombre)
      .then(proyectoCreado => {
        this.router.navigate(['prototipos']);
      })
      .catch(err => {
        alert (err);
      });
  }


  ngOnInit() {
  }

}
