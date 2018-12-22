import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './../home/home.component';
import { Router } from '@angular/router';
import { ApicompService } from './../../services/apicomp.service';
import { ApihttpService } from './../../services/apihttp.service';


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  editando: any = {
    referencia: '',
    fabricante: '',
    descripcion: '',
    fechaEntrada: '',
    cantidad: 0
  };

  constructor(private router: Router, private apicom: ApicompService, apihttp: ApihttpService) {
    if (!apihttp.logueado) {
      router.navigate(['']);
    }
   }

  ngOnInit() {
  }
  Crear_componente () {
    this.apicom.Crear_componente (this.editando).subscribe (data => {
      console.log(data);
      if (data.ok === true) {
        this.apicom.Crear_movimiento (data.componente._id, {almacen: 'ID', cantidad: this.editando.cantidad}).subscribe ((dataC) => {
          if (dataC.ok === true) {
            this.router.navigate (['home']);
          } else {
            alert (`Error creando movimiento: ${dataC.err}`);
            console.log(dataC);
          }
        });
      } else {
        alert (`Error creando componente: ${data.err}`);
      }
    });
  }
}
