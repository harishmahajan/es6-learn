import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { ObjectsComponent } from './objects/objects.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    ObjectsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ObjectsComponent]
})
export class AppModule { }
