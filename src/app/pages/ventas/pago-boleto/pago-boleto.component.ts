import { Component, OnInit, NgZone } from '@angular/core';
import { AutobusesService } from '../../../services/autobuses.service';
import {  Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-pago-boleto',
  templateUrl: './pago-boleto.component.html',
  styleUrls: ['./pago-boleto.component.css']
})
export class PagoBoletoComponent implements OnInit {
  costo;
  tipoBoleto;
  tipoAutobus;
  fechaSalida;
  numAciento;
  total;
  datos = {
    'nombre_cliente': '',
    'correo_cliente': '',    
    'metodo_pago':1,
    'tipo_boleto':'',
    'autobus':'',
    'fecha_salida':'',
    'fecha_regreso':'',       
    'num_aciento_cliente':1,
    'costo':''
  }

  pagarStripe = {    
      'token': '',
      'nombre':'',
      'correo': '', 
      'total':1,
  }
  /* Pay With Stripe */
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
  message: string;
  /* -----------*/
  constructor(
    public api: AutobusesService,
    private router: Router,
    private _zone: NgZone
  ) { }

  ngOnInit() {
     this.tipoBoleto  = this.api.getTipoBoleto();
     this.tipoAutobus = this.api.getBusIdL();
     this.fechaSalida = this.api.getFechaSalida();
     this.numAciento  = 2;
     this.total       = this.api.getTotal();
  }

  pagar(form) {
    this.message = 'Loading...';
    console.log("Message: ", this.message);
    console.log("Datos form: ", form.value);
    this.cardNumber = form.value.card_number;
    console.log("car n", this.cardNumber);
    
    (<any>window).Stripe.card.createToken({
      number: this.cardNumber,
      exp_month: form.value.expiry_month,
      exp_year: form.value.expiry_year,
      cvc: form.value.cvc
    }, (status: number, response: any) => {

      // Wrapping inside the Angular zone
      this._zone.run(() => {
        if (status === 200) {          
          this.message = `Success! Card token:  ${response.card.id}.`;          
          
          console.log("Message sucss: ", this.message);
          this.pagarStripe.token = response.id;
          this.pagarStripe.nombre = form.value.nombre_cliente;
          this.pagarStripe.correo = form.value.correo_cliente;
          this.pagarStripe.total = this.total;

          this.api.pagarBoleto(this.pagarStripe).subscribe(
            (data) => {
              if (data === 1) {
                Swal.fire({
                  title: 'Paymenth metod',
                  text: 'success!',
                  icon: 'success',   
                }) 
                console.log("Pagado..", data);      
              }              
            }, (err) => {
              console.log("Error: ", err.error);
              
            }
          );


        } else {
          this.message = response.error.message;
          console.log("Message err: ", this.message);
          
        }
      });
    });
  }

  pagar2(form) {
    console.log(form.value);
    this.datos.nombre_cliente = form.value.nombre_cliente;
    this.datos.correo_cliente = form.value.correo_cliente;
    this.datos.metodo_pago = 1;
    this.datos.tipo_boleto = this.tipoBoleto;
    this.datos.autobus = this.tipoAutobus;
    this.datos.fecha_salida = this.api.getFechaSalida();
    this.datos.fecha_regreso = this.api.getFechaSalida();
    this.datos.num_aciento_cliente =  this.numAciento;
    this.datos.costo =  this.api.getCosto();

    console.log("Datos: ", this.datos); 
  
    this.api.addBoleto(this.datos).subscribe(
      (data) => {
        console.log("succes");      
      }, (err) => {
        console.log("Error: ", err.error);
        
      }
    );

  }

}
