import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { BuscarCountriesComponent } from './buscar-countries/buscar-countries.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [BuscarCountriesComponent, AppComponent],
  imports: [
    AppRoutingModule, // ✅ Importar el módulo de rutas
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
