import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('carFlo', 'Des carbo spécial Flo', 'https://img.cuisineaz.com/660x660/2023/04/11/i192604-pates-a-la-carbonara.jpg')
  ];

}
