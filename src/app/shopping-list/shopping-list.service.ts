import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>()
  private ingredients: Ingredient[] = [
    new Ingredient('Pasta', 1),
    new Ingredient('Spec', 5),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredientToList(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.next(this.ingredients.slice())
  }
}
