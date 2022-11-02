import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { item } from '../../models/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: item[] = []

  @Input() viewMode = false

  @Input() currentItem: item = {
    nombre: '',
    descripcion: '',
    peso: 0,
    marca: '',
    estado: '',
    cantidad: 0
  }

  message = ''

  constructor(private us: ItemService,  private router: Router) { }

  ngOnInit(): void {

    this.us.getAllItems().subscribe(
      element => {
        this.items = element;
      }//element
    )//getAllItem
  }//ngOnInit

  getOne(id: string): void {
    this.us.getOneItem(id)
    .subscribe({
      next: (data) => {
        this.currentItem = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

}//ItemListComponent
