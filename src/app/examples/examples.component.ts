import { Component } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent  {

  constructor() { }

  lista: any[] = [];
  datoEntrada: any;
  indexToEdit: any = null;

  addElement() {
    this.lista.push(this.datoEntrada);
    this.datoEntrada = null;
  }

  removeItem(element: any) {
    const indexToRemove = this.lista.findIndex(x => x === element);
    if (indexToRemove != -1) {
      this.lista.splice(indexToRemove, 1);
    } 
  }

  selectedToEdit(element: any) {
    this.indexToEdit = this.lista.findIndex(x => x === element);
    this.datoEntrada = element;
  }

  editElement() {
    this.lista[this.indexToEdit] = this.datoEntrada;
    this.datoEntrada = this.indexToEdit = null;
  }
}
