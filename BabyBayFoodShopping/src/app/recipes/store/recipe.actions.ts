import {Action} from "@ngrx/store";
import {Recipe} from "../recipe.model";

export const SET_RECIPES = '[Recipe] Set Recipes';
export const FETCH_RECIPES = '[Recipe] Fetch Recipe';
export const ADD_RECIPE = '[Recipe] Add Recipe';
export const UPDATE_RECIPE = '[Recipe] Update Recipe';
export const DELETE_RECIPE = '[Recipe] Delete Recipe'
export const STORE_RECIPE = '[Recipe] Store Recipe';

export class SetRecipes implements Action {
  readonly type = SET_RECIPES;

  constructor(public payload: Recipe[]) {

  }

}

export class FetchRecipe implements Action {
  readonly type = FETCH_RECIPES;

  constructor() {
  }
}

export class AddRecipe implements Action {
  readonly type = ADD_RECIPE;

  constructor(public payload: Recipe) {
  }
}

export class UpdateRecipe implements Action {
  readonly type = UPDATE_RECIPE;

  constructor(public payload: { recipe: Recipe, id: number }) {

  }
}

export class DeleteRecipe implements Action {
  readonly type = DELETE_RECIPE;

  constructor(public payload: number) {

  }

}

export class StoreRecipe implements Action {
  readonly type = STORE_RECIPE;

}

export type RecipeActions = SetRecipes | FetchRecipe | AddRecipe | UpdateRecipe | DeleteRecipe | StoreRecipe;
