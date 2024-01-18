import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'carFlo',
      'Des carbo spécial Flo',
      'https://img.cuisineaz.com/660x660/2023/04/11/i192604-pates-a-la-carbonara.jpg',
      [
        new Ingredient('Pasta', 3),
        new Ingredient('Spec', 2),
        new Ingredient('Eggs', 1),
      ]
    ),
    new Recipe(
      'Tartare',
      'De la bonne viande',
      'https://assets.afcdn.com/recipe/20211130/125060_w1024h1024c1cx827cy763cxt0cyt0cxb2120cyb1414.jpg',
      [new Ingredient('Meat', 3)]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(name: string) {
    const recipe = this.recipes.find((r) => {
      return r.name === name;
    });
    return recipe;
  }
}
