import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { item } from '../../models/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: item[] = [];

  constructor(private us: ItemService) { }

  ngOnInit(): void {
    this.us.getAllItems().subscribe(
      element => {
        this.items = element;
      }//element
    )//getAllItems
  }//ngOnInit
}//ItemListComponent
