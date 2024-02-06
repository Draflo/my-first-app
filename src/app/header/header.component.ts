import { Component } from '@angular/core';
import { DataSorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private dataStorage: DataSorageService) {}

onSaveData() {
  this.dataStorage.saveRecipes()
}

onFetchData() {
  this.dataStorage.fetchRecipes().subscribe()
}
  collapsed = true
}
