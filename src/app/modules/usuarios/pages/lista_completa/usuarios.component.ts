import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  data: Observable<any>;
  columns: String[];
 
  usuario: String = '';

  constructor(
    private route: ActivatedRoute
    ) { 
      
     }

  ngOnInit() {
    this.columns = ['id', 'nome_usuario', 'email', 'nip_responsavel', 'permissao'];
    this.data = this.route.snapshot.data['usuario'];
    
  }
}
