import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'porTipo',
  pure: false
})
export class PorTipoPipe implements PipeTransform {

  transform(componentes: any[], patron: any): any[] {
    let vuelta: any[] = [];
    componentes.forEach(componente => {
      if ((patron.tipo === '') || (componente.estado === patron.tipo)) {
        if ((patron.busqueda === '') || (
          (componente.referencia.indexOf(patron.busqueda) != -1) ||
          (componente.descripcion.indexOf(patron.busqueda) != -1) ||
          (componente.fabricante.indexOf(patron.busqueda) != -1)
        )) {
          vuelta.push (componente);
        }
      }
    });
    return vuelta;
  }

}
