
import { Component, Input, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { ListItem } from 'src/app/pages/list/list.component';

@Component({
  selector: 'app-linha-list',
  templateUrl: './linha-list.component.html',
  styleUrls: ['./linha-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LinhaListComponent {
  @ViewChild('template', { static: true }) template: TemplateRef<any> = null as any;
  @Input() item: ListItem | null = null;
  isVisible = false;
  
  constructor(
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    if(this.item && this.item.quantity > 5){
      this.isVisible = true
    }
    this.viewContainerRef.createEmbeddedView(this.template);
   
  }
}
