import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarCountriesComponent } from './buscar-countries/buscar-countries.component';

const routes: Routes = [
  { path: '', redirectTo: '/buscar', pathMatch: 'full' },
  { path: 'buscar', component: BuscarCountriesComponent },
  { path: '**', redirectTo: '/buscar' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
