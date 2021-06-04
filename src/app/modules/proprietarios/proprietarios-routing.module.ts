import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProprietariosComponent } from './proprietarios.component';

const routes: Routes = [{ path: '', component: ProprietariosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProprietariosRoutingModule { }
