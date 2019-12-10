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
    this.api.setTipoBoleto(this.tipoBoleto);
  }

  getByIdBus() {
    this.busId = this.api.getBusId();    
    this.api.getAutobusById(this.busId).subscribe(
      (data) => {
        console.log(data);
        this.horario_salida = this.horaFecha(data["horario_salida"]);//data["horario_salida"];
        this.lugar_destino = data["lugar_destino"];
        this.tipo_bus = data["tipo_bus"];
        this.tiempo_viaje = this.viaje(data["tiempo_viaje"]);
        this.costo = data["costo"];        
        this.precio = this.calcularPrecio(this.tipo_bus, parseFloat(this.costo)).toFixed(2);
        this.api.setCosto(this.costo);
        this.api.setTotal(this.precio)
        this.api.setBusIdL(this.tipo_bus);
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

  // 2019-11-13T18:00:00-06:00 /*horarioBD*/
  horaFecha(horarioBD){
    var fecha = horarioBD.slice(0,10);
    this.api.setFechaSalida(fecha);
    var hora  = horarioBD.slice(11,19);
    var form  = "Fecha: " + fecha + " Hora: " + hora;
    return form;
  }

  viaje(tiempo){
    var tiempos = tiempo.toString();
    var hrs, min;
    var rs = "";
    if ( tiempos > 2 ){
      hrs = tiempos.slice(0,1);
      min = tiempos.slice(1,3);
      rs  = hrs + " hrs " + min + " min de viaje.";
      console.log(rs);
    }else{
      min = tiempos.slice(0,2);
      rs  = min + " min de viaje.";
      console.log(rs);
    }
    return rs;
  }
}

