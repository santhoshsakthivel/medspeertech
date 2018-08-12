import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from 'ngx-progressbar';
import { ImageCropperModule } from 'ngx-image-cropper';
import { SelectModule } from 'ng2-select';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { ContentComponent } from './content/content.component';
import { ProfpictureService } from "./_services/profpicture.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftNavComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ImageCropperModule,
    NgProgressModule,
    SelectModule,
  ],
  providers: [NgProgressModule, ProfpictureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
