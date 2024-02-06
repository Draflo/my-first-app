import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { DataSorageService } from '../shared/data-storage.service';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

export const RecipeResolverService: ResolveFn<Recipe[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  dataStorage: DataSorageService = inject(DataSorageService),
  recipesService: RecipeService = inject(RecipeService)
) => {
  const recipes = recipesService.getRecipes();
  if (recipes.length === 0) {
    return dataStorage.fetchRecipes();
  } else {
    return recipes;
  }
};
