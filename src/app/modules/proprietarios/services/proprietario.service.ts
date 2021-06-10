import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { CrudService } from 'src/app/shared/util/services/crud.service';
import { Proprietarios } from 'src/app/shared/models/proprietarios';
import { Setor } from 'src/app/shared/models/setor';
import { Posto } from 'src/app/shared/models/posto';
import { API_CONFIG } from 'src/app/core/config/api.config';


@Injectable({
  providedIn: 'root'
})
export class ProprietarioService extends CrudService<Proprietarios> {
  public isTeste = new BehaviorSubject<boolean>(false);

  constructor(
    protected http: HttpClient
  ){
    super(http, "/proprietarios");
  }

  public findAllPro(): Observable<Proprietarios[]>{
    return this.http.get<Proprietarios[]>(`${API_CONFIG.baseurl}/proprietarios`);
  }

  public findAllSetor(): Observable<Setor[]>{
    return this.http.get<Setor[]>(`${API_CONFIG.baseurl}/setor`);
  }
  public findAllPosto(): Observable<Posto[]>{
    return this.http.get<Posto[]>(`${API_CONFIG.baseurl}/posto`);
  }

  public showTeste() {
    this.isTeste.next(true);
}
  public hideTeste() {
    this.isTeste.next(false);
  }
}
