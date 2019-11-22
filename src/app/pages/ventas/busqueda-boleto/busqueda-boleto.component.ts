import { Component, OnInit } from '@angular/core';
import { AutobusesService } from '../../../services/autobuses.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-busqueda-boleto',
  templateUrl: './busqueda-boleto.component.html',
  styleUrls: ['./busqueda-boleto.component.css']
})
export class BusquedaBoletoComponent implements OnInit {
  
  busId;
  constructor(
    public api: AutobusesService,
    private router: Router,
  ) { }
  ngOnInit() {
  }

  buscarBus(form) {    
    this.busId = form.value.lugar_destino
    console.log(this.busId)
    this.api.setBusId(this.busId);
    this.router.navigate(['/resultado-busqueda-boleto']);
  }
}
