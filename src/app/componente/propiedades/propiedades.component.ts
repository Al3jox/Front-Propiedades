import { Component, OnInit } from '@angular/core';

import Swal from'sweetalert2';

import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { PropiedadesService } from 'src/app/servicios/propiedades.service';
import { Propiedad } from '../models/propiedades-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css']
})
export class PropiedadesComponent implements OnInit {

  formValue !: FormGroup;

  // Variables Aux
  
  public data_propiedades: any;
  public id: any;

  public nombreCaptura: any;
  public tipoCaptura = ["Casa","Apartamento", "Bodega", "Local", "Finca", "Lote"];
  public descripcionCaptura: any;
  public areaCaptura: any;
  public numCuartosCaptura: any;
  public numbanosCaptura: any;
  public numParqueaderosCaptura: any;
  public valorCaptura: any;
  public direccionCaptura: any;

  public mensajeOk : any;
  public mensajeError : any;

  propiedadesModel : Propiedad = new Propiedad;

  constructor(
    private formBuilder : FormBuilder,
    private propiedadService : PropiedadesService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.propiedadService.listar().subscribe(res => {
      this.data_propiedades = res
      console.log(this.data_propiedades)
    })
  }

  eliminar(item:any){
    this.propiedadService.eliminar(item)
    .subscribe(res => {
      Swal.fire(
        'La pripiedad ha sido eliminada con éxito',
        'Gracias por preferirnos',
        'info'    
      )
    })
    this.listar();
  }

  editar(item:any){
    this.propiedadesModel._id = item._id

    this.formValue.controls['nombreCaptura'].setValue(item.nombreCaptura)
    this.formValue.controls['tipoCaptura'].setValue(item.tipoCaptura)
    this.formValue.controls['descripcionCaptura'].setValue(item.descripcionCaptura)
    this.formValue.controls['areaCaptura'].setValue(item.areaCaptura)
    this.formValue.controls['numCuartosCaptura'].setValue(item.numCuartosCaptura)
    this.formValue.controls['numbanosCaptura'].setValue(item.numbanosCaptura)
    this.formValue.controls['numParqueaderosCaptura'].setValue(item.numParqueaderosCaptura)
    this.formValue.controls['valorCaptura'].setValue(item.valorCaptura)
    this.formValue.controls['direccionCaptura'].setValue(item.direccionCaptura)
    
  }

  actualizar(){
    this.propiedadesModel.nombre = this.formValue.value.nombreCaptura;
    this.propiedadesModel.tipo = this.formValue.value.tipoCaptura;
    this.propiedadesModel.descripcion = this.formValue.value.descripcionCaptura;
    this.propiedadesModel.areaTotal = this.formValue.value.areaCaptura;
    this.propiedadesModel.numCuartos = this.formValue.value.numCuartosCaptura;
    this.propiedadesModel.numbanos = this.formValue.value.numbanosCaptura;
    this.propiedadesModel.numParqueaderos = this.formValue.value.numParqueaderosCaptura;
    this.propiedadesModel.valor = this.formValue.value.valorCaptura;
    this.propiedadesModel.direccion = this.formValue.value.direccionCaptura;

    this.propiedadService.actualizar(this.propiedadesModel._id, this.propiedadesModel)
    .subscribe(res => {
      Swal.fire(
        'La propiedad fue acrualizada con éxito!',
        'Gracias por preferirnos',
        'success'
      )
    })

  }
  
  anuncio(){
    Swal.fire(
      'Me hizo falta la opción de actualizar. Tengo un error y no me alcanzó el tiempo para validarlo',
      'Gracias por entender',
      'info'
      )
  }

}
