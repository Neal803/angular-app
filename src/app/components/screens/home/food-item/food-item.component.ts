import { Component, Input } from '@angular/core';
import { IFood } from '../../../../services/food/food.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-food-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './food-item.component.html',
  styleUrl: './food-item.component.scss'
})
export class FoodItemComponent {

  @Input() food: IFood 
}
