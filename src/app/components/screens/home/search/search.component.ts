import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IFood } from '../../../../services/food/food.interface';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent{

  @Input() foods: IFood[]
  @Output() findFoods = new EventEmitter<{ searchTerm: string }>()

  searchTerm = ''

  handleSearch (e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.findFoods.emit({searchTerm: this.searchTerm})
    }
  }
}
