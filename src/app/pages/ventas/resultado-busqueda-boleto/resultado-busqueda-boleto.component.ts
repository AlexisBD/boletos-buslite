import { Component, OnInit } from '@angular/core';
import { AutobusesService } from '../../../services/autobuses.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-resultado-busqueda-boleto',
  templateUrl: './resultado-busqueda-boleto.component.html',
  styleUrls: ['./resultado-busqueda-boleto.component.css']
})
export class ResultadoBusquedaBoletoComponent implements OnInit {  
  busId;
  horario_salida;
  lugar_destino;
  tipo_bus;
  tiempo_viaje;  
  costo;
  tipoBoleto = 1;
  precio;
  constructor(
    public api: AutobusesService,
    private router: Router,
  ) { }
  ngOnInit() {
    this.getByIdBus();    
  }

  getByIdBus() {
    this.busId = this.api.getBusId();
    this.api.getAutobusById(this.busId).subscribe(
      (data) => {
        console.log(data);
        this.horario_salida = data["horario_salida"];
        this.lugar_destino = data["lugar_destino"];
        this.tipo_bus = data["tipo_bus"];
        this.tiempo_viaje = data["tiempo_viaje"];
        this.costo = data["costo"];        
        this.precio = this.calcularPrecio(this.tipo_bus, parseFloat(this.costo));

      },(error) => {
        console.log(error.error);
                
      }
    );
  }

  selectAciento(){
    this.router.navigate(['/reservacion-aciento']);
  }

  calcularPrecio(tipo_bus, costo){
    var pago;
    console.log(tipo_bus, costo);
    
    if (tipo_bus === 1) 
      pago = costo + 15 + (15 * 0.16);      
    if (tipo_bus === 2) 
      pago = costo + 10 + (10 * 0.16);      
    if (tipo_bus === 3)
      pago = costo + 5 + (5 * 0.16);

    if (this.tipoBoleto === 1)
      pago = pago - (pago * 0.09)      
  
    console.log("pago: ", pago);
    return pago
  }
}

