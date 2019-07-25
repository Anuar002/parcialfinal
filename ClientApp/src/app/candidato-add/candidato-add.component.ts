import { Component, OnInit } from '@angular/core';
import {Votante } from '../models/votante';
import { ServiciosService}  from '../services/servicios.service';
@Component({
  selector: 'app-candidato-add',
  templateUrl: './candidato-add.component.html',
  styleUrls: ['./candidato-add.component.css']
})
export class CandidatoAddComponent implements OnInit {

  constructor(private servicios: ServiciosService ) { }
  votan:Votante;
  ngOnInit() {
     this.votan={id:0,numerodeid:'',nombre:'',apellido:'',candidato:null,IdCandidatos:0};
  }
  add() {
    this.servicios.addTask(this.votan)
    .subscribe(task => {
    alert('Se agrego un nuevo Votante')
    });
    }
}
