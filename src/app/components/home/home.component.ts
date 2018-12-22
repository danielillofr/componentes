import { Component, OnInit } from '@angular/core';
import { ApicompService } from './../../services/apicomp.service';
import { ApihttpService } from './../../services/apihttp.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  componentes: any[] = [];


  constructor(private apicom: ApicompService, private apihttp: ApihttpService, private router: Router) {
    if (!apihttp.logueado) {
      router.navigate(['']);
    }
  }

  ngOnInit() {
    console.log(this.componentes);
    this.apicom.Solicitar_componentes().subscribe(data => {
      console.log(data);
      if (data.ok === true) {
        this.componentes = data.componentes;
      } else {
        alert('Error cargando componentes');
      }
      console.log('Data:', this.componentes);
    });
  }

  Eliminar (id: String, index: number) {
    console.log('Eliminando:', id);
    this.apicom.Eliminar_componente (id).subscribe (data => {
      if (data.ok === true) {
        console.log(data);
        this.componentes.splice (index, 1);
      }
    });
  }

  Detalle (id: String, index: number) {
    this.router.navigate ([`modifica/${id}`]);
  }

  Nuevo () {
    this.router.navigate(['nuevo']);
  }
}
