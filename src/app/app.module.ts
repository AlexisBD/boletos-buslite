import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*  Bootstrap */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/* Http service */
import { HttpClientModule } from '@angular/common/http';
/* Formularios */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
/* Pages */
import { BusquedaBoletoComponent } from './pages/ventas/busqueda-boleto/busqueda-boleto.component';
import { ResultadoBusquedaBoletoComponent } from './pages/ventas/resultado-busqueda-boleto/resultado-busqueda-boleto.component';
import { ReservacionAsientoComponent } from './pages/ventas/reservacion-asiento/reservacion-asiento.component';
import { PagoBoletoComponent } from './pages/ventas/pago-boleto/pago-boleto.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { GetAutobusesComponent } from './pages/admin/get-autobuses/get-autobuses.component';
import { CreateAutobusesComponent } from './pages/admin/create-autobuses/create-autobuses.component';
import { UpdateAutobusesComponent } from './pages/admin/update-autobuses/update-autobuses.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaBoletoComponent,
    ResultadoBusquedaBoletoComponent,
    ReservacionAsientoComponent,
    PagoBoletoComponent,
    LoginComponent,
    GetAutobusesComponent,
    CreateAutobusesComponent,
    UpdateAutobusesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
