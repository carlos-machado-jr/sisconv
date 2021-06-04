import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MenuListModel } from 'src/app/shared/models/menuList.model';

@Component({
  selector: 'navigation',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuList: MenuListModel[] = [
    {name:'Listar carros', href:'/carros', menuOptionName: "Carros", menuOption: true },
    {name:'Editar carros', href:'/carros', menuOptionName: "Carros", menuOption: true },
    {name:'Listar proprietarios', href:'/proprietarios', menuOptionName:"Proprietarios", menuOption: true},
    {name:'Editar proprietarios', href:'/proprietarios', menuOptionName:"Proprietarios", menuOption: true},
    {name:'Configurações', href:'/proprietarios', menuOptionName:"Admin", menuOption: true},
    {name:'Ajuda', href:'/proprietarios', menuOptionName:"Admin", menuOption: true}
  ];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
