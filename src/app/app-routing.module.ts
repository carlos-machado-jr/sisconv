import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoaderGuard } from './core/guards/loader.guard';

const routes: Routes = [
  
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), canActivate:[AuthGuard] },
  
  { path: 'proprietarios', loadChildren: () => import('./modules/proprietarios/proprietarios.module').then(m => m.ProprietariosModule), canActivate:[AuthGuard] },

  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  
  // canActivate:[AuthGuard], resolve: {usuario: LoaderGuard}
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), canActivate:[AuthGuard]},
  
  // canActivate:[AuthGuard]
  { path: 'usuarios', loadChildren: () => import('./modules/usuarios/usuarios.module').then(m => m.UsuariosModule), canActivate:[AuthGuard] },
  
  { path: 'veiculos', loadChildren: () => import('./modules/veiculos/veiculos.module').then(m => m.VeiculosModule), canActivate:[AuthGuard] },
  
  { path: '', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
