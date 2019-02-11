import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { HttpClientModule } from '@angular/common/http';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { app_routing } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { NuevoComponent } from './components/nuevo/nuevo.component';
import { ModificaComponent } from './components/modifica/modifica.component';
import { PorTipoPipe } from './pipes/por-tipo.pipe';
import { EntradaComponent } from './components/entrada/entrada.component';
import { PrototiposComponent } from './components/prototipos/prototipos.component';
import { NuevoProyectoComponent } from './components/nuevo-proyecto/nuevo-proyecto.component';
import { DetalleProyectoComponent } from './components/detalle-proyecto/detalle-proyecto.component';
import { NuevoCompProyComponent } from './components/nuevo-comp-proy/nuevo-comp-proy.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NuevoComponent,
    ModificaComponent,
    PorTipoPipe,
    EntradaComponent,
    PrototiposComponent,
    NuevoProyectoComponent,
    DetalleProyectoComponent,
    NuevoCompProyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    app_routing,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
