import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* PAGES */
import { BusquedaBoletoComponent } from './pages/ventas/busqueda-boleto/busqueda-boleto.component';
import { ResultadoBusquedaBoletoComponent } from './pages/ventas/resultado-busqueda-boleto/resultado-busqueda-boleto.component';
import { ReservacionAsientoComponent } from './pages/ventas/reservacion-asiento/reservacion-asiento.component';
import { PagoBoletoComponent } from './pages/ventas/pago-boleto/pago-boleto.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { GetAutobusesComponent } from './pages/admin/get-autobuses/get-autobuses.component';
import { CreateAutobusesComponent } from './pages/admin/create-autobuses/create-autobuses.component';
import { UpdateAutobusesComponent } from './pages/admin/update-autobuses/update-autobuses.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'busqueda-boletos' },
  { path: 'login', component: LoginComponent },
  { path: 'list-autobuses', component: GetAutobusesComponent },
  { path: 'create-autobus', component: CreateAutobusesComponent },  
  { path: 'update-autobus', component: UpdateAutobusesComponent },
  { path: 'busqueda-boletos', component: BusquedaBoletoComponent },
  { path: 'resultado-busqueda-boleto', component: ResultadoBusquedaBoletoComponent },
  { path: 'reservacion-aciento', component: ReservacionAsientoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
