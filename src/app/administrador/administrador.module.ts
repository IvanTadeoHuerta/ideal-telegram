import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { OrientadoresComponent } from './orientadores/orientadores.component';
import { DetalleOrientadorComponent } from './orientadores/detalle-orientador/detalle-orientador.component';
import { CiclosComponent } from './ciclos/ciclos.component';
import { GruposComponent } from './grupos/grupos.component';
import { DetalleCiclosComponent } from './ciclos/detalle-ciclos/detalle-ciclos.component';

const routesAdmon: Routes = [
  { path: 'orientadores', component: OrientadoresComponent },
  { path: 'orientador/:id', component: DetalleOrientadorComponent },
  { path: 'ciclos', component: CiclosComponent },
  { path: 'ciclo/:id', component: DetalleCiclosComponent },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routesAdmon)
  ],
  declarations: [OrientadoresComponent, CiclosComponent, DetalleCiclosComponent ,GruposComponent, DetalleOrientadorComponent]
})

export class AdministradorModule { }
