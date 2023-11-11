import { Component } from '@angular/core';
import { ListItem, newItem } from './pages/list/list.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listItens : ListItem[] = [];
  item: ListItem = newItem;

  env: string = environment.mode

  constructor(){
    
  }

  adicionar(){
    var i = this.listItens[this.listItens.length -1] ? this.listItens[this.listItens.length -1].id : 0;
    const newItem: ListItem = { id: i! + 1, name: this.item.name, quantity: this.item.quantity };
    this.listItens.push(newItem);
    console.log(this.listItens);
    this.item = { id: 0, name: '', quantity: 0 };
  }

}


