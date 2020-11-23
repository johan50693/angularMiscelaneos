
import { Routes } from '@angular/router';
import { UsuarioDetalleComponent } from './usuario-detalle.component';
import { UsuarioEditarComponent } from './usuario-editar.component';
import { UsuarioNuevoComponent } from './usuario-nuevo.component';


export const USUARIO_ROUTES: Routes = [
    {path: 'detalle', component: UsuarioDetalleComponent},
    {path: 'editar', component: UsuarioEditarComponent},
    {path: 'nuevo', component: UsuarioNuevoComponent},
    { path: '**', pathMatch: 'full', redirectTo:'nuevo'}
    // { path: '**', component: PageNotFoundComponent },
];

