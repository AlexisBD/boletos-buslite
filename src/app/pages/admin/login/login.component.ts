import { Component, OnInit } from '@angular/core';
import { AutobusesService } from '../../../services/autobuses.service';
import {  Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rol;

  usuario = {
    'username': '',
    'password': '',    
  }
  constructor(
    public api: AutobusesService,
    public formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login(form) {
      console.log("Datos del formulario", form.value);
      this.usuario = form.value;
     
      this.api.login(this.usuario).subscribe((res) => {

        if ( res["is_superuser"] === true) {
          Swal.fire({
            title: 'Log In',
            text: 'Login success!',
            icon: 'success',            
            confirmButtonText: 'ok'
          })                                  
          this.rol = res["is_superuser"];          
          
          this.api.setUserRol(this.rol);
          //this.router.navigate(['/admin']);
          this.router.navigate(['/list-autobuses']);          
        } 
      },
      (err) => {
        let msg;
        msg =  err.error;  
        console.log(msg); 
        
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: JSON.stringify(msg),          
        })        
      }
    );

  }
    
}
