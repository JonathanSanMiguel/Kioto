import { Component, OnInit } from '@angular/core';
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
  item: item={
    id: 0,
    nombre: '',
    descripcion: '',
    peso: 0,
    marca: '',
    estado: '',
    cantidad: 0
  }

  constructor( private us: ItemService, private router: Router ) { }

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
        this.ngOnInit()
      }//res
    )//deleteItem
  }//eliminar

  editar(id: any){
    this.router.navigate(['/kioto'])
    console.log(id);
  }//editar

}//ItemListComponent
