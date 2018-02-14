import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-detalle-ciclos',
  templateUrl: './detalle-ciclos.component.html',
  styles: []
})
export class DetalleCiclosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
  }

}
