import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { AppComponent }             from './app.component';
import { IntroComponent } from './intro/intro.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FashionWomenComponent } from './fashion-women/fashion-women.component';
import { FashionMenComponent } from './fashion-men/fashion-men.component';
import { BeautyComponent } from './beauty/beauty.component';
import { CommercialComponent } from './commercial/commercial.component';
import { VideoComponent } from './video/video.component';
import { ContactComponent } from './contact/contact.component';
import { BioComponent } from './bio/bio.component';


//import { AuthGuard }                from './guard/auth.guards';

const routes: Routes = [

  { path: 'intro',                component: IntroComponent },
  { path: '',  redirectTo: '/intro', pathMatch: 'full' },
  { path: '',               component: MenuComponent, children:[
    { path: 'home',                component: HomeComponent },
    { path: 'women',                component: FashionWomenComponent },
    { path: 'men',                component: FashionMenComponent },
    { path: 'beauty',                component: BeautyComponent },
    { path: 'commercial',                component: CommercialComponent },
    { path: 'video',                component: VideoComponent },
    { path: 'bio',                component: BioComponent },
    { path: 'contact',           component: ContactComponent }
  ] },
  
  { path: '*', component: IntroComponent } 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}