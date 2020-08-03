import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { Practice1Component } from './practice1/practice1.component';
import { Practice2Component } from './practice2/practice2.component';
import { FormsModule } from '@angular/forms';
import { Practice3Component } from './practice3/practice3.component';
import { Practice4Component } from './practice4/practice4.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    Practice1Component,
    Practice2Component,
    Practice3Component,
    Practice4Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'practice1', component: Practice1Component },
      { path: 'practice2', component: Practice2Component },
      { path: 'practice3', component: Practice3Component },
      { path: 'practice4', component: Practice4Component },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
