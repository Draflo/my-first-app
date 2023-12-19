import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  collapsed = true
 @Output() navigationSelected = new EventEmitter<string>()
  onSelect(feature: string) {
    this.navigationSelected.emit(feature)
  }
}
