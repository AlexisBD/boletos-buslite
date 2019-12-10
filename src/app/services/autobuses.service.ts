import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutobusesService {
  busId
  tipo_boleto
  autobus
  fecha_salida
  num_asiento
  costo
  total
  /* admin*/
  public ENDPOINT = 'https://khalifa-bus.herokuapp.com';
  private URL_API = this.ENDPOINT + '/api/';
  /* pagos */
  //public ENDPOINT_EXPRESS = 'http://ec2-54-211-24-42.compute-1.amazonaws.com:3008/boletos/';  
  public ENDPOINT_EXPRESS = 'http://54.211.24.42:3000';   
  //public ENDPOINT_EXPRESS = 'http://192.168.0.17:3000';   
  public ENDPOINT_PAGO = '192.168.0.17:4242/create-payment-intent'

  constructor( public http: HttpClient ) { }
  /* ADMIN */
  login(usuario): Observable<any>{
    var ruta = this.URL_API + 'login/';
    console.log("Ruta login", ruta, usuario);

    return this.http.post(ruta, usuario);
  }

  getAutobuses(): Observable<any>{
    var ruta = this.URL_API + 'autobuses/';
    console.log("Ruta get All buses", ruta);

    return this.http.get(ruta);
  }

  getAutobusById(id): Observable<any>{
    var ruta = this.URL_API + 'autobuses/' + id;
    console.log("Bus info", ruta);
    return this.http.get(ruta);
  }

  addAutobus(bus): Observable<any>{
    var ruta = this.URL_API + 'autobuses/';
    console.log("Ruta add buse", ruta);

    return this.http.post(ruta, bus);
  }

  updateAutobus(id:number, bus){
    var ruta = this.URL_API + 'autobuses/' + id;
    console.log('Update bus data: ', bus);
    console.log(bus.id);
    return this.http.put(ruta, {'name':bus.name, 'email':bus.email, 'phone':bus.phone});
  }

  deleteAutobus(id): Observable<any>{
    var ruta = this.URL_API + 'autobuses/' + id;
    console.log("Delete bus", ruta);
    return this.http.delete(ruta);
  }

  /* venta boleto */
  addBoleto(datos): Observable<any>{
    var ruta = this.ENDPOINT_EXPRESS;
    console.log("Ruta add boleto", ruta);
    console.log("datos: ", datos);
  
    return this.http.post(ruta, datos);
  }
  pagarBoleto(datos): Observable<any>{
    //var ruta = this.ENDPOINT_PAGO;
    var ruta = this.ENDPOINT_EXPRESS + '/pago'
    console.log("Ruta pagar boleto", ruta);
    console.log("datos: ", datos);
  
    return this.http.post(ruta, datos);
  }



  

  /* LOCAL STORAGE */
  setUserRol(rol:string){
    localStorage.setItem('rol',rol);
  }

  getUserRol(){
    return localStorage.getItem('rol');
  }

  setBusIdL(busId:number){
    this.busId = busId;
    localStorage.setItem('busId',JSON.stringify(busId));
  }

  getBusIdL(){
    return JSON.parse(localStorage.getItem('busId'));
  }  

   /* Setters and Getters */
  setBusId(busId){
    this.busId = busId;
  }

  getBusId(){
    return this.busId;
  }

  setFechaSalida(fecha_salida){    
    this.fecha_salida = fecha_salida
    localStorage.setItem('fecha_salida',JSON.stringify(fecha_salida));
  }

  getFechaSalida(){
    return JSON.parse(localStorage.getItem('fecha_salida'));    
  }

  setNumAsiento(num_asiento){
    this.num_asiento = num_asiento
    localStorage.setItem('num_asiento',JSON.stringify(num_asiento));
  }

  getNumAsiento(){    
    return JSON.parse(localStorage.getItem('num_asiento')); 
  }

  setTotal(total){
    this.total = total
    localStorage.setItem('total',JSON.stringify(total));
  }

  getTotal(){    
    return JSON.parse(localStorage.getItem('total')); 
  }

  setCosto(costo){
    this.costo = costo
    localStorage.setItem('costo',JSON.stringify(costo));
  }

  getCosto(){    
    return JSON.parse(localStorage.getItem('costo')); 
  }

  setTipoBoleto(tipo_boleto){
    this.tipo_boleto = tipo_boleto
    localStorage.setItem('tipo_boleto',JSON.stringify(tipo_boleto));
  }

  getTipoBoleto(){
    return JSON.parse(localStorage.getItem('tipo_boleto')); 
  }

  /* DETALLES DEL BOLETO */
  
  

  
}
