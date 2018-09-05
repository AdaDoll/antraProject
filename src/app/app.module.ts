import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Angular Module
import {FlexLayoutModule } from "@angular/flex-layout";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

import 'hammerjs';


//ngxBootstrap
import { CarouselModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { VideoPageComponent } from './video-page/video-page.component';

const appRoutes: Routes = [
  { path: 'video-page', component: VideoPageComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    VideoPageComponent,
   
 
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    CarouselModule.forRoot(),
    
    

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
