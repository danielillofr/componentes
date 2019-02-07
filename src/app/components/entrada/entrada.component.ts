import { Component, OnInit } from '@angular/core';

import { ApihttpService } from './../../services/apihttp.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  constructor(private aphttp: ApihttpService, private router: Router) {
    if (!aphttp.logueado)
    {
      router.navigate(['/']);
    }
   }

  ngOnInit() {
  }

}
