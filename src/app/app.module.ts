import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { WorkingPageComponent } from './pages/working-page/working-page.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'working-page', component: WorkingPageComponent },
  // {
  //   path: 'heroes',
  //   component: '',
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  { path: '**', component: WorkingPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WorkingPageComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
