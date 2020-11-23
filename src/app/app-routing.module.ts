import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import {UsuarioComponent} from './components/usuario/usuario.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { 
    path: 'usuario/:id', 
    component: UsuarioComponent,
    children: [
      {path: 'detalle', component: UsuarioDetalleComponent},
      {path: 'editar', component: UsuarioEditarComponent},
      {path: 'nuevo', component: UsuarioNuevoComponent},
      { path: '**', pathMatch: 'full', redirectTo:'nuevo'}
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
