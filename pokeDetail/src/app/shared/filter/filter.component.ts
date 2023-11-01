import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Output() filtroAlterado = new EventEmitter<string>();
  filtroValor: string = '';

  setfilter() {
    this.filtroAlterado.emit(this.filtroValor);
  }
}
