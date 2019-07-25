import { Component, OnInit } from '@angular/core';
import {Votante } from '../models/votante';
import {ServiciosService} from '../services/servicios.service';
@Component({
  selector: 'app-candidato-list',
  templateUrl: './candidato-list.component.html',
  styleUrls: ['./candidato-list.component.css']
})
export class CandidatoListComponent implements OnInit {
  votan:Votante[];
  constructor(private servicio:ServiciosService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.servicio.getAll().subscribe(votante=>this.votan=votante);
    }
}
