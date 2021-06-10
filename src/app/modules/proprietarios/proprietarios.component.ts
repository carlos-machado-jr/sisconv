import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Proprietarios } from 'src/app/shared/models/proprietarios';
import { Usuarios } from 'src/app/shared/models/usuarios';
import { StorageService } from 'src/app/shared/util/services/storage.service';
import { ProprietarioService } from './services/proprietario.service';

@Component({
  selector: 'app-proprietarios',
  templateUrl: './proprietarios.component.html',
  styleUrls: ['./proprietarios.component.scss']
})
export class ProprietariosComponent implements OnInit {
  data: Observable<any>;
  columns: any[] = ["id", "nome", "nipCpf", "email", "setor", "posto"]
  isLog: Subject<boolean>;
  proprietarios: Proprietarios[];
  delete: boolean = true;
  edit: boolean = true;
  private usuarios: Usuarios;

  constructor(
    private route: Router,
    private storage: StorageService,
    private proprietarioService: ProprietarioService
    ) { }

  ngOnInit(): void {
   this.isLog = this.proprietarioService.isTeste;
  //  this.data = this.getPermissions();
   this.data = this.proprietarioService.findAllPro();
   this.proprietarioService.findAllPro().subscribe(x => console.log(x))
    
  }
  
  
  redirectUrl(event: any){
    this.route.navigate([`proprietarios/${event}`]);
    
  }

  private getPermissions(): Observable<any> {
    this.usuarios = this.storage.getUser();
    switch(this.usuarios.permissao){
      case 'Supervisor':
        return this.proprietarioService.findAllActivated();
        break;
      case 'Administrador':
          return this.getAdmin();
       break;
      default:
        return this.getAdmin();
        break;
    }
  }
  private getAdmin(): Observable<any> {
    let rota = this.route.url.split('/')[2];
    
    switch (rota) {
      case 'ativados':
        return this.proprietarioService.findAllActivated();
        break;
      case 'desativados':
        return this.proprietarioService.findAllDisabled();
        break; 
      default:
        
        return this.proprietarioService.findAll()
         
        
    }


  }
}
