import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { HttpClientModule } from '@angular/common/http';

import {FormsModule} from '@angular/forms';

import { app_routing } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { NuevoComponent } from './components/nuevo/nuevo.component';
import { ModificaComponent } from './components/modifica/modifica.component';
import { PorTipoPipe } from './pipes/por-tipo.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NuevoComponent,
    ModificaComponent,
    PorTipoPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
