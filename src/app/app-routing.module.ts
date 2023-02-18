import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SportsComponent } from './sports/sports.component';
import { AuthGuard } from './guards/auth.guard';
import { ViewPlayersComponent } from './players/view-players/view-players.component';
import { AddPlayerComponent } from './players/add-player/add-player.component';
import { PlayersComponent } from './players/players.component';
import { ViewEventsComponent } from './sports/view-events/view-events.component';
import { ViewSportsComponent } from './sports/view-sports/view-sports.component';
import { ViewSportByNameComponent } from './sports/view-sport-by-name/view-sport-by-name.component';
import { ViewEventByNameComponent } from './sports/view-event-by-name/view-event-by-name.component';
import { CreateEventComponent } from './sports/create-event/create-event.component';
import { CancelEventComponent } from './sports/cancel-event/cancel-event.component';

const routes: Routes = [
  {path:'', title:'Home', component:HomeComponent},
  {path:'home', title:'Home', component:HomeComponent},
  {path:'login', title:'Login', component:LoginComponent},
  {path:'register', title:'Register', component:RegisterComponent},
  {path:'sports', title:'Sports', component:SportsComponent, canActivate: [AuthGuard]},
  {
    path: '', pathMatch: 'full', redirectTo: 'players'
  },
  {
    path: 'players',
    title:'Players',
    component: PlayersComponent,
    canActivate: [AuthGuard],
    children: [
        {
           path: 'addplayer',
           title:'Add Player',
           component: AddPlayerComponent,
           canActivate: [AuthGuard]
        },
        {
           path: 'viewplayers',
           title:'View Players',
           component: ViewPlayersComponent,
           canActivate: [AuthGuard]
        }
    ]
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'events'
  },
  {
    path: 'sports',
    title:'Sports',
    component: SportsComponent,
    canActivate: [AuthGuard],
    children: [
        {
           path: 'viewsports',
           title:'List of Sports',
           component: ViewSportsComponent,
           canActivate: [AuthGuard]
        },
        {
          path: 'viewsportbyname',
          title:'Find Sport by Name',
          component: ViewSportByNameComponent,
          canActivate: [AuthGuard]
       },
       {
        path: 'viewevents',
        title:'List of Events',
        component: ViewEventsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'vieweventbyname',
        title:'Find Event by Name',
        component: ViewEventByNameComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'addevent',
        title:'Create new event',
        component: CreateEventComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'deleteevent',
        
        component: CancelEventComponent,
        canActivate: [AuthGuard]
      }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
