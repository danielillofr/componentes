import { Component, OnInit } from '@angular/core';
import { ApihttpService } from './../../services/apihttp.service';
import { Router } from '@angular/router';
import { ApicompService } from './../../services/apicomp.service';



@Component({
  selector: 'app-prototipos',
  templateUrl: './prototipos.component.html',
  styleUrls: ['./prototipos.component.css']
})
export class PrototiposComponent implements OnInit {

  proyectos: any[] = [];

  constructor(private apihttp: ApihttpService, private router: Router, private apicomp: ApicompService) {
    if (!apihttp.logueado)
    {
      router.navigate(['/']);
      return;
    }

    // apicomp.Obtener_proyectos().subscribe(data => {
    //   if (!data.ok) {
    //     alert('Error obteniendo datos');
    //     this.router.navigate(['/']);
    //     return;
    //   }
    //   console.log('Proyectos:', data);
    //   this.proyectos = data.proyectos;
    // }, (err) => {
    //   console.log(err);
    //   alert (`Se ha producido un error accediendo a los datos:${err.message}`);
    // })
    
    apicomp.pruebaProm().then(dato => {
      this.proyectos = dato;
      // console.log(dato);
    }).catch(error => {
      // console.log('Error cazado:',error.message);
      alert(error.message);
      this.router.navigate(['/']);
    })

   }

  ngOnInit() {
  }

}
