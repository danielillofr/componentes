import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NuevoComponent } from './components/nuevo/nuevo.component';
import { ModificaComponent } from './components/modifica/modifica.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { PrototiposComponent } from './components/prototipos/prototipos.component';





const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'entrada', component: EntradaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/:tipo', component: HomeComponent },
  { path: 'nuevo', component: NuevoComponent },
  { path: 'modifica/:id', component: ModificaComponent },
  { path: 'prototipos', component: PrototiposComponent },
  { path: '**', component: LoginComponent },

];


export const app_routing = RouterModule.forRoot(routes);
