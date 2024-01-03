import { Component, OnInit } from '@angular/core';
import { IFood } from '../../../services/food/food.interface';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FoodItemComponent } from './food-item/food-item.component';
import { SearchComponent } from './search/search.component';
import { FiltersComponent } from './filters/filters.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, FoodItemComponent, SearchComponent, FiltersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
  
  
export class HomeComponent implements OnInit{


  foods: IFood[] = []
  filteredFoods: IFood[] = []

  constructor(
    private http: HttpClient,
  ) { }

  API_URL = 'http://localhost:3000/food'

  ngOnInit() { 
    return this.http.get<IFood[]>(this.API_URL).subscribe(data => {
      this.foods = data
      this.filteredFoods = data
    })
  }

  onSearch(eventData: { searchTerm: string }) {
      this.filteredFoods = this.foods.filter(food => 
        food.title.toLowerCase().includes(eventData.searchTerm.toLowerCase()))
  }

  onFilter(eventData: { type: string }) {
      this.filteredFoods = this.foods.filter(food => 
        food.type === eventData.type)
  }
}
