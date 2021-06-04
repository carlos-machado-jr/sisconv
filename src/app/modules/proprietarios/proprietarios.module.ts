import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProprietariosRoutingModule } from './proprietarios-routing.module';
import { ProprietariosComponent } from './proprietarios.component';


@NgModule({
  declarations: [
    ProprietariosComponent
  ],
  imports: [
    CommonModule,
    ProprietariosRoutingModule
  ]
})
export class ProprietariosModule { }
