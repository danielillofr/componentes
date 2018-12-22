import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApihttpService } from './../../services/apihttp.service';
import { ApicompService } from './../../services/apicomp.service';
import { TipoMovimiento } from './../../interfaces/movimiento.interface';
import { createHostListener } from '@angular/compiler/src/core';




@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})
export class ModificaComponent implements OnInit {
  id_componente: String = '';
  editando: any;
  movimientos: TipoMovimiento[] = [];
  nuevoMovimiento: TipoMovimiento = {
    almacen: '',
    cantidad: ''
  };
  constructor(private ar: ActivatedRoute, private router: Router, private apihttp: ApihttpService, private apicom: ApicompService) {
    if (!apihttp.logueado) {
      router.navigate (['login']);
    }
    ar.params.subscribe(data => {
      if (!data.id) {
        router.navigate (['login']);
        return;
      }
      console.log('ID:', data.id);
      this.id_componente = data.id;
      this.apicom.Obtener_componente (this.id_componente).subscribe (dataC => {
        if (!dataC.ok) {
          this.router.navigate (['home']);
        }
        this.editando = dataC.componente;
      });
      this.apicom.Obtener_movimientos (this.id_componente).subscribe (dataD => {
        console.log('Datos de movi:', dataD);
        if (!dataD.ok) {
          this.router.navigate (['home']);
        }
        this.movimientos = dataD.movimientos;
      });

    });
   }

  ngOnInit() {
  }

  Volver () {
    this.router.navigate (['home']);
  }

  Modificar () {
    this.apicom.Modificar_componente (this.id_componente, this.editando).subscribe (data => {
      if (!data.ok) {
        alert ('No se ha podido actualizar el componente');
      } else {
        this.router.navigate (['home']);
      }
    });
  }
  Crear_movimiento () {
    this.apicom.Crear_movimiento (this.id_componente, this.nuevoMovimiento).subscribe (data => {
      if (!data.ok) {
        alert ('Error creando el movimiento');
      } else {
        console.log('Movimiento:', data.movimiento);
        this.movimientos.push (data.movimiento);
        // const nuevaCantidad: Number = parseInt(this.editando.cantidad) - parseInt(this.nuevoMovimiento.cantidad);
        // this.apicom.Modificar_componente (this.id_componente, {cantidad: this.editando.cantidad}).subscribe((data) => {
        //   if (!data.ok) {
        //     alert ('Error actualizando componente');
        //   }
        // });
      }
    });
  }

}
