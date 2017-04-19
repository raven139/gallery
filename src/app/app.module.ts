import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { BlockViewComponent } from './blockView/block-view.component';
import { ImageUploadComponent } from './imageUpload/image-upload.component';
import { HeaderComponent } from './header/header.component';
import { TableViewComponent } from './tableView/table-view.component';
import { MenuComponent } from './menu/menu.component';
import { DialogComponent } from './shared/components/dialog/dialog.component';

import { AppRouteModule } from './appRoute/app-route.module';

import { ImageService } from './_services/image.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './_services/in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    TableViewComponent,
    BlockViewComponent,
    ImageUploadComponent,
    HeaderComponent,
    MenuComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRouteModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
