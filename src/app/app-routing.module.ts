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
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
