import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrientadoresComponent } from './orientadores/orientadores.component';
import { CiclosComponent } from './ciclos/ciclos.component';
import { GruposComponent } from './grupos/grupos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrientadoresComponent, CiclosComponent, GruposComponent]
})

export class AdministradorModule { }
