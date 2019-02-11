import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComproyectoService } from './../../services/comproyecto.service';
import { TipoComProyecto } from '../../interfaces/comproyecto.interface';
import { TipoLogComPro } from './../../interfaces/logcompro.interface';


@Component({
  selector: 'app-mod-comp-proy',
  templateUrl: './mod-comp-proy.component.html',
  styleUrls: ['./mod-comp-proy.component.css']
})
export class ModCompProyComponent implements OnInit {

    formulario: FormGroup;
    idComponente: String;
    idProyecto: String;
    logs: TipoLogComPro[];
    constructor(private activatedRoute: ActivatedRoute, private comproyectoService: ComproyectoService, private router: Router) {
      this.formulario = new FormGroup({
        referencia: new FormControl('', [Validators.required, Validators.minLength(3)]),
        url: new FormControl(''),
        cantidad: new FormControl('', Validators.required),
        descripcion: new FormControl('', [Validators.required, Validators.minLength(3)]),
        codAirzone: new FormControl('', [Validators.required, Validators.minLength(3)]),
        estado: new FormControl('', Validators.required)
      });
      activatedRoute.params.subscribe(params => {
        this.idComponente = params.idComponente;
        this.idProyecto = params.idProyecto;
        this.comproyectoService.Obtener_componente_proyecto(this.idComponente)
          .then(respuesta => {
            const componente:TipoComProyecto = <TipoComProyecto>respuesta;
            console.log('OKKK:', respuesta);
            this.formulario.controls['referencia'].setValue(componente.referencia);
            this.formulario.controls['url'].setValue(componente.url);
            this.formulario.controls['cantidad'].setValue(componente.cantidad);
            this.formulario.controls['descripcion'].setValue(componente.descripcion);
            this.formulario.controls['estado'].setValue(componente.estado);
            this.formulario.controls['codAirzone'].setValue(componente.codAirzone);

          })
          .catch(err => {
            console.log(err);
          });
          this.comproyectoService.Obtener_logs_componente(this.idComponente)
            .then(data => {
              console.log(data);
              this.logs = <TipoLogComPro[]>data;
            })
            .catch(err => {
              console.log('Error:', err);
            });
      });
     }
     Guardar = () => {
       this.comproyectoService.Actualizar_componente_proyecto(this.idComponente, this.formulario.value)
        .then(data => {
          console.log('Componente guardado:', data);
          this.router.navigate(['detalleproyecto',this.idProyecto]);
        })
        .catch(err => {
          alert ('Error guadando el componente');
          console.log('Err:', err);
        })
     }

  ngOnInit() {
  }

}
