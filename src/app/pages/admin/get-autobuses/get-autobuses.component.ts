import { Component, OnInit } from '@angular/core';
import { AutobusesService } from '../../../services/autobuses.service';
import {  Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-get-autobuses',
  templateUrl: './get-autobuses.component.html',
  styleUrls: ['./get-autobuses.component.css']
})
export class GetAutobusesComponent implements OnInit {
  public popoverTitle: string = 'Delete';
  public popoverMessage: string = 'Sure you want to delete this bus ?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  
  busId;
  buses = [];
  horaRecivida;
  formatTime;
  constructor(
    public api: AutobusesService,
    private router: Router,
  ) { }

  ngOnInit() {    
    this.listBuses();    
  }

  listBuses() {    
   this.api.getAutobuses().subscribe(
      (data) => { // Success        
        this.buses = data;               
        console.log("buses ", this.buses);
        this.getFormatTime()
      },
      (error) => {
        console.error(error);
      });
  }

  idBusSelected(item: any) {
    console.log("value item: ", item);

    this.busId = item["id"];
    console.log("id Bus selected:", this.busId);

    this.api.setBusId(this.busId);
    this.router.navigate(['/update-autobus']);
  }

  delete(item: any){
    this.busId = item["id"];
    console.log("id Bus selected to delete:", this.busId);
    console.log(item);
    this.api.deleteAutobus(this.busId).subscribe(
      (data) => {
          console.log("Success", data);
          this.listBuses();
      },(err) => {
        let msg = [];
        msg =  err.error;
        console.log(err.error)
        console.log(msg);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: JSON.stringify(msg),          
        })  
      });
  }

  getFormatTime() {
    for (let i = 0; i < this.buses.length; i++) {
      const element = this.buses[i]["horario_salida"];
      console.log("hora: ", element)
    }
    var timeObject = new Date(this.horaRecivida);
    
    var hour = timeObject.getHours().toString();    
    var min = timeObject.getMinutes().toString();    
    var sec = timeObject.getSeconds().toString();    

    return this.formatTime = hour + ':' + min + ':' + sec;    
  }


}
