import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { KiotoComponent } from './components/kioto/kioto.component';

const routes: Routes = [
  { path: '', redirectTo: 'kioto', pathMatch: 'full'},
  { path: 'kioto', component: KiotoComponent},
  { path: 'itemList', component: ItemListComponent },
  { path: 'itemForm', component: ItemFormComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
