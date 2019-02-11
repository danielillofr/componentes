import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NuevoComponent } from './components/nuevo/nuevo.component';
import { ModificaComponent } from './components/modifica/modifica.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { PrototiposComponent } from './components/prototipos/prototipos.component';
import { NuevoProyectoComponent } from './components/nuevo-proyecto/nuevo-proyecto.component';
import { DetalleProyectoComponent } from './components/detalle-proyecto/detalle-proyecto.component';
import { NuevoCompProyComponent } from './components/nuevo-comp-proy/nuevo-comp-proy.component';









const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'entrada', component: EntradaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/:tipo', component: HomeComponent },
  { path: 'nuevo', component: NuevoComponent },
  { path: 'modifica/:id', component: ModificaComponent },
  { path: 'prototipos', component: PrototiposComponent },
  { path: 'nuevoproyecto', component: NuevoProyectoComponent },
  { path: 'detalleproyecto/:id', component: DetalleProyectoComponent },
  { path: 'nuevocompproy/:id', component: NuevoCompProyComponent },
  { path: '**', component: LoginComponent },

];


export const app_routing = RouterModule.forRoot(routes);
