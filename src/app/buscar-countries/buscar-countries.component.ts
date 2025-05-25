import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buscar-countries',
  templateUrl: './buscar-countries.component.html',
  styleUrls: ['./buscar-countries.component.css'],
  standalone: false
})
export class BuscarCountriesComponent {
  // Obtenemos el input desde el HTML
  @ViewChild('searchInput') searchInput!: ElementRef;
  // Aqui sera donde guardemos la lista de los paises
  countries: any[] = [];
  // Spin o ruedita que lo tengo desactivado
  loading: boolean = false;

  //Constructor para hacer peticiones HTTP
  constructor(private http: HttpClient) {}

  //Funcion para buscar un paos
  searchCountry() {
    //Aqui obtenemos el valor del input
    const searchTerm = this.searchInput.nativeElement.value.trim();
    // Si no encontramos nada devolvemos nada
    if (!searchTerm) return;

    //Activamos la ruedita
    this.loading = true;
    //Hacemos una peticion HTTP GET a la API de los paises
    this.http.get<any[]>(`https://restcountries.com/v3.1/name/${searchTerm}`)
      .subscribe({
        next: (response) => {
          // Guardamos todos los resultados en el array
          this.countries = response;
          this.loading = false;
        },
        error: () => {
          // Limpiamos si hay error
          this.countries = [];
          this.loading = false;
        }
      });
  }
}
