import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './componente/barra/barra.component';
import { PropiedadesComponent } from './componente/propiedades/propiedades.component';
import { FooterComponent } from './componente/footer/footer.component';
import { CrearPropiedadComponent } from './componente/crear-propiedad/crear-propiedad.component';
import { InicioComponent } from './componente/inicio/inicio.component';

// Para trabajar con formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Http
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    PropiedadesComponent,
    FooterComponent,
    CrearPropiedadComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
