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
  total
  public ENDPOINT = 'https://khalifa-bus.herokuapp.com';
  private URL_API = this.ENDPOINT + '/api/';

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
  

  /* LOCAL STORAGE */
  setUserRol(rol:string){
    localStorage.setItem('rol',rol);
  }

  getUserRol(){
    return localStorage.getItem('rol');
  }

   /* Setters and Getters */
  setBusId(busId){
    this.busId = busId;
  }

  getBusId(){
    return this.busId;
  }

  /* DETALLES DEL BOLETO */
  setTipoBoleto(tipo_boleto){
    this.tipo_boleto = tipo_boleto
  }

  getTipoBoleto(){
    return this.tipo_boleto;
  }

  setAutobus(autobus){
    this.autobus = autobus
  }

  getAutobus(){
    return this.autobus
  }

  setFechaSalida(fecha_salida){
    this.fecha_salida = fecha_salida
  }

  getFechaSalida(){
    return this.fecha_salida;
  }

  setNumAsiento(num_asiento){
    this.num_asiento = num_asiento
  }

  getNumAsiento(){
    return this.num_asiento;
  }

  setTotal(total){
    this.total = total
  }

  getTotal(){
    return this.total;
  }
}
