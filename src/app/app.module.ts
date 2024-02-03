import {NgModule} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {NgIconsModule} from '@ng-icons/core';
import {AppComponent} from './app.component';
import {
  matAdd,
  matAddTask,
  matArrowBack,
  matArrowBackIos,
  matArrowForward,
  matArrowUpward,
  matAutoGraph,
  matBook,
  matBookmarkAdd,
  matBookmarkAdded,
  matCheck,
  matClear,
  matCoffee,
  matDelete,
  matDiamond,
  matDone,
  matEdit,
  matError,
  matFitnessCenter,
  matHighlightOff,
  matHistory,
  matHome,
  matCode,
  matInfo,
  matLocalFireDepartment,
  matLogin,
  matLogout,
  matMessage,
  matMonitorHeart,
  matPause,
  matPeople,
  matPerson,
  matPlayArrow,
  matSchool,
  matSearch,
  matSportsGymnastics,
  matStop,
  matSyncAlt,
  matWaterDrop,
  matWhatsapp
} from '@ng-icons/material-icons/baseline';
import { faAt } from '@fortawesome/free-solid-svg-icons';

import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, RouterOutlet,
    RouterTestingModule, AppRoutingModule,
    BrowserAnimationsModule,
    NgIconsModule.withIcons({
      matHistory,
      matCode,
      matStop,
      matArrowBackIos,
      matAdd,
      matBookmarkAdded,
      matPerson,
      matMessage,
      matDelete,
      matEdit,
      matLogout,
      matBookmarkAdd,
      matInfo,
      matDone,
      matLocalFireDepartment,
      matWaterDrop,
      matArrowBack,
      matArrowForward,
      matCoffee,
      matHome,
      matFitnessCenter,
      matError,
      matCheck,
      matClear,
      matSearch,
      matPeople,
      matSyncAlt,
      matMonitorHeart,
      matArrowUpward,
      matHighlightOff,
      matAutoGraph,
      matWhatsapp,
      matDiamond,
      matPlayArrow,
      matPause,
      matBook,
      matSchool,
      matSportsGymnastics,
      matAddTask,
      matLogin
    }), RouterLink, RouterLinkActive, FontAwesomeModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  faAt = faAt;
}
