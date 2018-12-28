import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NuevoComponent } from './components/nuevo/nuevo.component';
import { ModificaComponent } from './components/modifica/modifica.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/:tipo', component: HomeComponent },
  { path: 'nuevo', component: NuevoComponent },
  { path: 'modifica/:id', component: ModificaComponent },
  { path: '**', component: LoginComponent },

];


export const app_routing = RouterModule.forRoot(routes);
