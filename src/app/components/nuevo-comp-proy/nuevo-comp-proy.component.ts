import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComproyectoService } from './../../services/comproyecto.service';




@Component({
  selector: 'app-nuevo-comp-proy',
  templateUrl: './nuevo-comp-proy.component.html',
  styleUrls: ['./nuevo-comp-proy.component.css']
})
export class NuevoCompProyComponent implements OnInit {
  formulario: FormGroup;
  idProyecto: String;
  constructor(private activatedRoute: ActivatedRoute, private comproyectoService: ComproyectoService, private router: Router) {
    this.formulario = new FormGroup({
      proyecto: new FormControl(''),
      referencia: new FormControl('', [Validators.required, Validators.minLength(3)]),
      url: new FormControl(''),
      cantidad: new FormControl('', Validators.required),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
    activatedRoute.params.subscribe(params => {
      this.formulario.controls['proyecto'].setValue(params.id);
      this.idProyecto = params.id;
      console.log(this.formulario.value);
    })
   }

   Guardar = () => {
     this.comproyectoService.Guardar_componente_proyecto(this.idProyecto, this.formulario.value)
     .then(dato => {
        this.router.navigate(['detalleproyecto', this.idProyecto]);
     })
     .catch(err => {
       alert('Error creando el componente');
     })
   }

  ngOnInit() {
  }

}
