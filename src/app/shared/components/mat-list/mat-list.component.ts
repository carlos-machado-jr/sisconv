import { Component, Input, OnInit } from '@angular/core';
import { MenuListModel } from '../../models/menuList.model';

@Component({
  selector: 'menu-list',
  templateUrl: './mat-list.component.html',
  styleUrls: ['./mat-list.component.scss']
})
export class MatListComponent implements OnInit {
  @Input() exibition: Boolean = true;
  @Input() menuItens: MenuListModel[] = [];
  menuOptions: MenuListModel[] = [];
  menuOptionsNames: any[] = [];
  
  
  constructor() { }

  ngOnInit(): void {
   this.createMenuList();
  }
  
 private createMenuList(){
    let object: any[] = []
    // filtrando o array para passar somente os menus dropdown para dentro do menuOptions
    this.menuOptions = this.menuItens.filter(menu => menu.menuOption ? menu : false );
    // filtrando o array para deixar somente os links principais no menuItens
    this.menuItens = this.menuItens.filter(menu => !menu.menuOption ? menu : false );
    // filtrando os menus dropdown e pegando os nomes
    this.menuOptions.map(names => object.push(names.menuOptionName));
    // retirando os nomes de menus repetidos
    object = object.reduce((unico, item) =>  {return unico.includes(item) ? unico : [...unico, item]} , []); 
    // recuperando os menus e colocando dentro de um novo objeto para apresenta-los na tela
    object.map(names => {
      let menu = {
      name: names
      }

      this.menuOptionsNames.push(menu);
    })

 }
}
