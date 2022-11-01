import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  constructor(private router: Router) { }

  goToKioto() {
    this.router.navigate(['/', 'kioto'])
  }
  goToItemList() {
    this.router.navigate(['/', 'itemList'])
  }
  goToItemForm() {
    this.router.navigate(['/', 'itemForm'])
  }

}