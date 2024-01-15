import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable({providedIn: 'root'})
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>()

    private recipes: Recipe[] = [
        new Recipe('carFlo', 'Des carbo spécial Flo', 'https://img.cuisineaz.com/660x660/2023/04/11/i192604-pates-a-la-carbonara.jpg')
      ];

      getRecipes() {
        return this.recipes.slice()
      }
}