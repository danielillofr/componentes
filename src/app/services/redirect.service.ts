import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {
  ruta: String[] = null;
  constructor() { }
  
  setRuta = (ruta: String[]) => {
    this.ruta = ruta;
  }

  getRuta = () => {
    return this.ruta;
  }

}

