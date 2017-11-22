import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TranslateSiteComponent } from './translate-site/translate-site.component';
import { TranslateSiteService } from './translate-site/translate-site.service';

@NgModule({
  declarations: [
    AppComponent,
    TranslateSiteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TranslateSiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
