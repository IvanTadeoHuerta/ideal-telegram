import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Orientador } from '../../../modelos/orientador';

declare var Materialize:any;

@Component({
  selector: 'app-detalle-orientador',
  templateUrl: './detalle-orientador.component.html',
  styles: []
})

export class DetalleOrientadorComponent implements OnInit {
  public formOrientador: FormGroup;
  public orientador: Orientador;
  public submitted: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.orientador = new Orientador();
    this.submitted = false;
    this.formOrientador = this.fb.group({
      nombre: new FormControl(this.orientador.nombre, [Validators.required]),
      apellidop: new FormControl(this.orientador.apellidoPaterno, [Validators.required]),
      apellidom: new FormControl(this.orientador.apellidoMaterno, []),
      email: new FormControl(this.orientador.email, [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/)]),
      telefono: new FormControl(this.orientador.telefono, [Validators.required]),
      observaciones: new FormControl(this.orientador.observaciones, [])
    });
  }

  enviarFormulario(model: Orientador) {
    this.submitted = true;
    if(!this.formOrientador.valid){
      Materialize.toast('Se encontrarón errores!', 4000, 'red')   
    }
  }

}
