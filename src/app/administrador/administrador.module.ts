import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrientadoresComponent } from './orientadores/orientadores.component';
import { DetalleOrientadorComponent } from './orientadores/detalle-orientador/detalle-orientador.component';
import { CiclosComponent } from './ciclos/ciclos.component';
import { GruposComponent } from './grupos/grupos.component';

const routesAdmon: Routes = [
  { path: 'orientadores', component: OrientadoresComponent },
  { path: 'orientador/:id', component: DetalleOrientadorComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routesAdmon)
  ],
  declarations: [OrientadoresComponent, CiclosComponent, GruposComponent, DetalleOrientadorComponent]
})

export class AdministradorModule { }
