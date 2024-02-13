import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ShoppingEditComponent, ShoppingListComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([
      { path: '', component: ShoppingListComponent },
    ]),
    SharedModule
  ],
  exports: [ShoppingEditComponent, ShoppingListComponent],
})
export class ShoppingListModule {}
