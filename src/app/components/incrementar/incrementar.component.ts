import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-incrementar',
  templateUrl: './incrementar.component.html',
  styles: [
  ]
})
export class IncrementarComponent {

@Input('valor') progreso: number = 50;
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor(valor: number) {

    if (this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }
    if (this.progreso <= 0 && valor<= 0) {
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }

    this.progreso = this.progreso + valor;
    return this.valorSalida.emit(this.progreso)
  }

}
