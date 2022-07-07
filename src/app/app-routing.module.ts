import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraComponent } from './componente/barra/barra.component';
import { FooterComponent } from './componente/footer/footer.component';
import { PropiedadesComponent } from './componente/propiedades/propiedades.component';
import { CrearPropiedadComponent } from './componente/crear-propiedad/crear-propiedad.component';
import { InicioComponent } from './componente/inicio/inicio.component';

const routes: Routes = [
  {path: 'barra', component:BarraComponent},
  {path: 'propiedades', component: PropiedadesComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'crearPropiedad', component: CrearPropiedadComponent},
  {path: '', component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
