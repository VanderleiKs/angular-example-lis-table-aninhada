import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ListComponent {
  @Input() listItem? : ListItem[];




}


export interface ListItem{
  id: number|null;
  name: string;
  quantity: number;
}

export const newItem: ListItem = {id: 0, name: '', quantity: 0}