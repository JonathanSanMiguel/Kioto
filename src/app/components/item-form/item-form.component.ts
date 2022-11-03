import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { item } from '../../models/item';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  item: item = {
    id: 0,
    nombre: '',
    descripcion: '',
    peso: 0,
    marca: '',
    estado: '',
    cantidad: 0
  }
  submitted = false

  constructor( private itemService: ItemService ) { }
  ngOnInit(): void {}

  GuardarForm(): void {

    this.itemService.CreateItem(this.item).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true
      },
      error: (e) => console.error(e)
    })//.subscribe
  }//GuardarForm

  newForm(): void {
    this.submitted = false
    this.item = {
      id: 0,
      nombre: '',
      descripcion: '',
      peso: 0,
      marca: '',
      estado: '',
      cantidad: 0
    }//this.item
  }//newForm

}
