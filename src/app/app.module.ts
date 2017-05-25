import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ContentService } from './static-content/content.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StaticContentComponent } from './static-content/static-content.component';
import { DynamicContentComponent } from './static-content/dynamic-content/dynamic-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StaticContentComponent,
    DynamicContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
