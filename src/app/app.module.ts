import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AngularSvgIconPreloaderModule } from 'angular-svg-icon-preloader';
import { AngularSvgIconModule } from 'angular-svg-icon';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import Components from './components';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [AppComponent, ...Components, AuthComponent],
  imports: [
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
