import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})

export class ProgressComponent {

  progreso1: number = 25;
  progreso2: number = 35;

  getProgreso1() {
   return 
  }

  getProgreso2(){
    return 
  }

  cambioValorHijo(valor : number){
    console.log('Hey!!!', valor)
  }
}