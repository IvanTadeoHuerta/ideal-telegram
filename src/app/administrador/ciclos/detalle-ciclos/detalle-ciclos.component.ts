import { Component, OnInit } from '@angular/core';
import { Ciclo } from '../../../modelos/ciclo';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

declare var $:any;
declare var Materialize:any;

@Component({
  selector: 'app-detalle-ciclos',
  templateUrl: './detalle-ciclos.component.html',
  styles: []
})
export class DetalleCiclosComponent implements OnInit {
  
  public formCiclo: FormGroup;
  public ciclo: Ciclo;
  public submitted: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.ciclo = new Ciclo();
    this.submitted = false;
    this.formCiclo = this.fb.group({
      fecha_inicio: new FormControl(this.ciclo.fecha_inicio, [Validators.required]),
      fecha_final: new FormControl(this.ciclo.fecha_final, [Validators.required]),
      observaciones: new FormControl(this.ciclo.observaciones, [])
    });

    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
  }

  enviarFormulario(model: Ciclo) {
    model.fecha_inicio =  $('.datepicker').pickadate('picker').get('highlight', 'yyyy');
    console.log('Datos del ciclo: ',model)
    this.submitted = true;
    if(!this.formCiclo.valid){
      Materialize.toast('Se encontrarón errores!', 4000, 'red')   
    }
  }

}
