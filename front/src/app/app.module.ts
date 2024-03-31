import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importez HttpClientModule
import { AppRoutingModule } from './app-routing.module'; // Importez votre fichier d'itinéraire

@NgModule({
  declarations: [
    // Déclarez vos composants ici une fois qu'ils sont créés
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Ajoutez HttpClientModule ici
    AppRoutingModule // Importez votre module d'itinéraire
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule { }
