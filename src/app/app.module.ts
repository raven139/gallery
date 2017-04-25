import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { BlockViewComponent } from './home/blockView/block-view.component';
import { ImageUploadComponent } from './home/imageUpload/image-upload.component';
import { HeaderComponent } from './home/header/header.component';
import { TableViewComponent } from './home/tableView/table-view.component';
import { HomeComponent } from './home/home.component';
import { DialogComponent } from './shared/components/dialog/dialog.component';


import { AppRouteModule } from './app-route.module';

import { ImageService } from './_services/image.service';
import { ImageLocalStorageService } from './_services/image-localstorage.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './_services/in-memory-data.service';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AuthGuard } from './_guards/auth.guard';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRouteModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TableViewComponent,
    BlockViewComponent,
    ImageUploadComponent,
    HeaderComponent,
    DialogComponent,
  ],
  providers: [
    ImageService,
    ImageLocalStorageService,

    AuthGuard,
    AuthenticationService,
    UserService,
    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
