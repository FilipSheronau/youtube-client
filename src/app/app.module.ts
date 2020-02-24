import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { YoutubeModule } from './youtube/youtube.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    YoutubeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
