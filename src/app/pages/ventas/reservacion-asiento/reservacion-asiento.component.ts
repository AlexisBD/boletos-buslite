import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservacion-asiento',
  templateUrl: './reservacion-asiento.component.html',
  styleUrls: ['./reservacion-asiento.component.css']
})
export class ReservacionAsientoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  setColor(btn, color) {
    let count = 1;
      var property = document.getElementById(btn);
      if (count == 0) {
          property.style.backgroundColor = "#FF2D5E"
          count = 1;        
      }
      else {
          property.style.backgroundColor = "#2566E8"
          count = 0;
      }
  }
 

}
