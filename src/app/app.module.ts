import {NgModule} from '@angular/core';
import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavBarComponent} from './component/nav-bar/nav-bar.component';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RestaurantComponent} from './component/restaurant/restaurant.component';
import * as Hammer from 'hammerjs'
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSortModule} from "@angular/material/sort";
import {MatSelectModule} from "@angular/material/select";

export class HammerConfig extends HammerGestureConfig {
  override = <any>{
    swipe: {direction: Hammer}
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    NgbAlertModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HammerModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSortModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
