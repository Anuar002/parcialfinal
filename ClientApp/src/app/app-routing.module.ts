import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {CandidatoListComponent} from './candidato-list/candidato-list.component';
import {CandidatoAddComponent} from './candidato-add/candidato-add.component';
const routes: Routes = [
  {
  path:'lista',
  component:CandidatoListComponent
  },
  {
  path:'agregar',
  component:CandidatoAddComponent
  },
 
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
