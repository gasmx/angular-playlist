import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from 'default/app.component';
import { VideoListComponent } from 'modules/video/video-list.component'
import { VideoDetailComponent } from 'modules/video/video-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoDetailComponent
  ],
  bootstrap:    [ AppComponent ],
  imports:      [ BrowserModule, FormsModule ]
})

export class AppModule {}