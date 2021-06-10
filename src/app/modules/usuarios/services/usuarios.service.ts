import { Injectable } from '@angular/core';
import { Usuarios } from 'src/app/core/models/usuarios';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/app/shared/util/services/crud.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService extends CrudService<Usuarios>{

  constructor(
    protected http: HttpClient
  ){
    super(http, "/usuarios");
  }
}
