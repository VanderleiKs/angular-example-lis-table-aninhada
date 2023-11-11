import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './pages/list/list.component';
import { FormsModule } from '@angular/forms';
import { LinhaListComponent } from './components/linha-list/linha-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LinhaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
