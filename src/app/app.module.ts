import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

// import { jtt_footballdata } from '../../node_modules/angular-footballdata-api-factory';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DataComponent } from './data/data.component';
import { LeagueTableComponent } from './data/league-table/league-table.component';
import { ApiComponent } from './api/api.component';
import { TeamComponent } from './team/team.component';
import { LastGameComponent } from './team/lastgame/lastgame.component';
import { LastFiveGamesComponent } from './team/last-five-games/last-five-games.component';
import { AllGamesComponent } from './team/all-games/all-games.component';
import { HeadToHeadComponent } from './team/head-to-head/head-to-head.component';

const appRoutes: Routes = [
  { path: '', component: HeaderComponent},
  { path: 'team', component: TeamComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataComponent,
    LeagueTableComponent,
    ApiComponent,
    TeamComponent,
    LastGameComponent,
    LastFiveGamesComponent,
    AllGamesComponent,
    HeadToHeadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
