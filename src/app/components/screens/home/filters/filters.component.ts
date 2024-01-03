import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [NgClass],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {

  @Output() filterFoods = new EventEmitter<{ type: string }>()

  type = ''

  handleFilter(type: string) {
    this.type = type
      this.filterFoods.emit({type})
  }
}
