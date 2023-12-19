import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Pasta', 1),
    new Ingredient('Spec', 5)
  ]

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    }

}
