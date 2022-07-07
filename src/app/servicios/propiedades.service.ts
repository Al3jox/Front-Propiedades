import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Propiedad } from '../componente/models/propiedades-model';


const baseUrl = environment.url

@Injectable({
  providedIn: 'root'
})
export class PropiedadesService {

  constructor(private http: HttpClient) { }

  crear(data:any){
    return this.http.post<any>(baseUrl+'propiedad/crearPropiedad', data)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  listar(){
    return this.http.get<any>(baseUrl + 'propiedad/listarPropiedades')
    .pipe(map((res:any) => {
      return res;
    }))
  }

  actualizar(id: any, data: any){
    return this.http.put<any>(baseUrl + 'propiedad/actualizarPropiedad/' + id, data)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  eliminar(id: any){
    return this.http.delete<any>(baseUrl + 'propiedad/eliminarPropiedad/' + id)
  }


}
