import { Component, OnInit } from '@angular/core';
import Swal from'sweetalert2';

import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Propiedad } from '../models/propiedades-model';
import { PropiedadesService } from 'src/app/servicios/propiedades.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-propiedad',
  templateUrl: './crear-propiedad.component.html',
  styleUrls: ['./crear-propiedad.component.css']
})
export class CrearPropiedadComponent implements OnInit {

  // Variables Aux

  formValue !: FormGroup;

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

  // Creación del nuevo objeto

  propiedadModel : Propiedad = new Propiedad;

  constructor(
    private formBuilder : FormBuilder,
    private propiedadService : PropiedadesService,
    private router : Router
  ) 
  { }

  ngOnInit(): void {
    this.obtenerCamposFormulario();
  }

  obtenerCamposFormulario(){
    this.formValue = this.formBuilder.group({
      nombreCaptura : [''],
      tipoCaptura : [''],
      descripcionCaptura : [''],
      areaCaptura : [''],
      numCuartosCaptura : [''],
      numbanosCaptura : [''],
      numParqueaderosCaptura : [''],
      valorCaptura : [''],
      direccionCaptura : [''],
    })
  }




  crearPropiedad(){

    this.propiedadModel.nombre = this.formValue.value.nombreCaptura;
    this.propiedadModel.tipo = this.formValue.value.tipoCaptura;
    this.propiedadModel.descripcion = this.formValue.value.descripcionCaptura;
    this.propiedadModel.areaTotal = this.formValue.value.areaCaptura;
    this.propiedadModel.numCuartos = this.formValue.value.numCuartosCaptura;
    this.propiedadModel.numbanos = this.formValue.value.numbanosCaptura;
    this.propiedadModel.numParqueaderos = this.formValue.value.numParqueaderosCaptura;
    this.propiedadModel.valor = this.formValue.value.valorCaptura;
    this.propiedadModel.direccion = this.formValue.value.direccionCaptura;

    if(this.propiedadModel.nombre == ""){
      Swal.fire(
        'El campo de nombre no puede estar vacio',
        'Por favor llena todos los campos',
        'error'
      )
    }

    else if(this.propiedadModel.tipo == ""){
      Swal.fire(
        'El campo de tipo no puede estar vacio',
        'Por favor llena todos los campos',
        'error'
      )
    }

    else if(this.propiedadModel.descripcion == ""){
      Swal.fire(
        'El campo de descripción no puede estar vacio',
        'Por favor llena todos los campos',
        'error'
      )
    }

    else if(this.propiedadModel.areaTotal == null){
      Swal.fire(
        'El campo de area total no puede estar vacio',
        'Por favor llena todos los campos',
        'error'
      )
    }

    else if(this.propiedadModel.numCuartos == null){
      Swal.fire(
        'El campo de número de cuartos no puede estar vacio',
        'Por favor llena todos los campos',
        'error'
      )
    }

    else if(this.propiedadModel.numbanos == null){
      Swal.fire(
        'El campo de número de baños no puede estar vacio',
        'Por favor llena todos los campos',
        'error'
      )
    }

    else if(this.propiedadModel.numParqueaderos == null){
      Swal.fire(
        'El campo de número de parqueaderos no puede estar vacio',
        'Por favor llena todos los campos',
        'error'
      )
    }

    else if(this.propiedadModel.valor == null){
      Swal.fire(
        'El campo de valor de la vivienda no puede estar vacio',
        'Por favor llena todos los campos',
        'error'
      )
    }

    else if(this.propiedadModel.direccion == null){
      Swal.fire(
        'El campo de dierección de la vivienda no puede estar vacio',
        'Por favor llena todos los campos',
        'error'
      )
    }
    else{
      this.propiedadService.crear(this.propiedadModel)
      .subscribe(res => {
        console.log(res);

            Swal.fire(
              'La propiedad se ha creado con éxito!',
              'Gracias por preferirnos!',
              'success'
            )
            this.formValue = this.formBuilder.group({
              nombreCaptura : [''],
              tipoCaptura : [''],
              descripcionCaptura : [''],
              areaCaptura : [''],
              numCuartosCaptura : [''],
              numbanosCaptura : [''],
              numParqueaderosCaptura : [''],
              valorCaptura : [''],
              direccionCaptura : [''],
            })
          
      },
      err => {
        console.log(err)
      })
    }

  }


}
