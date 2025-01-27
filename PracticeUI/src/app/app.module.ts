import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignatureComponent } from './signature/signature.component';
import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SignatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ImageCropperModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
