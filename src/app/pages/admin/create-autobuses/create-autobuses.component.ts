import { Component, OnInit } from '@angular/core';
import { AutobusesService } from '../../../services/autobuses.service';
import {  Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-create-autobuses',
  templateUrl: './create-autobuses.component.html',
  styleUrls: ['./create-autobuses.component.css']
})
export class CreateAutobusesComponent implements OnInit {
  bus = {     
    'horario_salida':'',
    'horario_regreso':'',  
    'num_acientos_ocupados': 0  
  }
  horario_salida;
  horario_regreso;
  constructor(
    public api: AutobusesService,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  /*
  horario_regreso: "2019-11-22T12:00:00-06:00" 
  */
  addBus(form) {    
    this.horario_salida = form.value.fecha_salida + " "+ form.value.hora_salida + ":00" 
    this.horario_regreso = form.value.fecha_regreso + " "+ form.value.hora_regreso + ":00" 
    this.bus = form.value
    this.bus.horario_salida = this.horario_salida;
    this.bus.horario_regreso = this.horario_regreso;
    this.bus.num_acientos_ocupados = 0;
    console.log(this.bus)

    this.api.addAutobus(this.bus).subscribe((res) => {
      Swal.fire({
        title: 'Register Bus',
        text: 'success!',
        icon: 'success',            
      })   
      console.log("Data: ", res)
      this.router.navigate(['/list-autobuses']);
    },(err) => {
      let msg = [];
      msg =  err.error;      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: JSON.stringify(msg),          
      })  
    });
  }
}
