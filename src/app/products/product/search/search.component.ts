import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';
  @Input() options: string[] = [];
  @Output() onSearchTextChange = new EventEmitter<string>();
  onSearchTextInputChange($event: any) {
    this.searchText = $event.target?.value;
    console.log($event.target?.value);
    this.onSearchTextChange.emit(this.searchText);
    if (this.searchText) {
      this.options = [this.searchText];
    } else {
      this.options = [];
    }
  }

  onEnter(event: KeyboardEvent) {
    // console.log('🚀 ~ SearchComponent ~ onEnter ~ event:', event.key);
    if (event.key === 'Enter') {
      this.onSearchTextChange.emit(this.searchText);
    }
  }
  onSelect($event: any) {
    if ($event.nzValue) {
      this.searchText = $event.nzValue;
      this.onSearchTextChange.emit(this.searchText);
    }

    // throw new Error('Method not implemented.');
  }
}
