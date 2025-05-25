import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
//Aqui tenemos el servicio
export class CountryService {
  //Aqui tenemos la url donde iremos a buscar a los paises
  private apiUrl = 'https://restcountries.com/v3.1/name/';

  //El constructor para hacer las peticiones HTTP
  constructor(private http: HttpClient) {}
  //Recibimos el parametro name que sera el pais a buscar, por ejemplos Mexico, Recordar añadir Country que es la interfaz
  searchCountry(name: string): Observable<Country[]> {
    //Haremos una peticion get a la URL, y devolvemos un Obervable, significa que nos lo devolvera de manera asincrona
    return this.http.get<any[]>(`${this.apiUrl}${name}`);
  }
}
