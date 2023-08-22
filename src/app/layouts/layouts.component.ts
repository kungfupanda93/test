import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})

export class LayoutsComponent {
  menuItems: any
  constructor() {
    // Menu List //
    this.menuItems = [
      { title: 'Login', logo: 'verified_user' },
      { title: 'Profile', logo: 'account_circle' },
      { title: 'Favorites', logo: 'favorite' },
    ];
  }
  ngOnInit() {
    console.log(this.menuItems)
  }

}
