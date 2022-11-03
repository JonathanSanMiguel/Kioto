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

  constructor( private us: ItemService ) { }

  ngOnInit(): void {
    this.us.getAllItems().subscribe(
      element => {
        this.items = element
      }//element
    )//getAllItem
  }//ngOnInit

  eliminar(id: any){
    this.us.deleteItem(id).subscribe(
      res=>{
        console.log('item borrado')
        this.ngOnInit();
      }//res
    )//deleteItem
  }//eliminar

  editar(){
    
  }

}//ItemListComponent
