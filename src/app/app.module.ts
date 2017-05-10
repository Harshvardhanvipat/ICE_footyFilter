import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { Routes, RouterModule } from '@angular/router';

// import { jtt_footballdata } from '../../node_modules/angular-footballdata-api-factory';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DataComponent } from './data/data.component';
import { LeagueTableComponent } from './data/league-table/league-table.component';
import { ApiComponent } from './api/api.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataComponent,
    LeagueTableComponent,
    ApiComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
