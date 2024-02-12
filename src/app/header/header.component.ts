import { Component } from '@angular/core';
import { DataSorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  collapsed = true;
  isAuthenticated = false
  private userSubscr: Subscription;
  constructor(
    private dataStorage: DataSorageService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user
    });
  }

  onLogout() {
    this.authService.logout()
  }

  onSaveData() {
    this.dataStorage.saveRecipes();
  }

  onFetchData() {
    this.dataStorage.fetchRecipes().subscribe();
  }

  ngOnDestroy() {
    this.userSubscr.unsubscribe();
  }
}
