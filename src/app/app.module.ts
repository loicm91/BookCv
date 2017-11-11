import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule }       from './app-routing.module';
import { MasonryModule } from 'angular2-masonry';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { TopComponent } from './top/top.component';
import { MenuComponent } from './menu/menu.component';
import { FashionWomenComponent } from './fashion-women/fashion-women.component';
import { FashionMenComponent } from './fashion-men/fashion-men.component';
import { BeautyComponent } from './beauty/beauty.component';
import { CommercialComponent } from './commercial/commercial.component';
import { VideoComponent } from './video/video.component';
import { ContactComponent } from './contact/contact.component';
import { BioComponent } from './bio/bio.component';
import { EditoComponent } from './edito/edito.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    TopComponent,
    MenuComponent,
    FashionWomenComponent,
    FashionMenComponent,
    BeautyComponent,
    CommercialComponent,
    VideoComponent,
    ContactComponent,
    BioComponent,
    EditoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    MasonryModule,
    InfiniteScrollModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
