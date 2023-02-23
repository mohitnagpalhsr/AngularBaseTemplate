import { AuthenticatedResponse } from '../Models/AuthenticatedResponse.model';
import { AuthenticationServiceService } from '../authentication-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Role } from '../Models/Role';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {

  constructor(private router:Router, private jwtHelper: JwtHelperService, private http: HttpClient, private auths: AuthenticationServiceService){}
  
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = localStorage.getItem("jwt");
    const currentuser = localStorage.getItem("role");


    //checking for access token expiry
    if (token && !this.jwtHelper.isTokenExpired(token)){
      console.log(this.jwtHelper.decodeToken(token))
      if (currentuser) {
        // check if route is restricted by role
        if (route.data.roles && route.data.roles[0] === 1) {
          // role not authorised so redirect to home page
          this.router.navigate(['/']);
          return false;
        }
        // authorised so return true
        return true;
      }
      return true;
    }

    //checking for refresh token, if refresh token is found, then it will return true else it will navigate us to login
    //page
    const isRefreshSuccess = await this.tryRefreshingTokens(token); 

    if (!isRefreshSuccess) { 
      this.router.navigate(["login"]); 
    }

    return isRefreshSuccess;
  }


private async tryRefreshingTokens(token: string): Promise<boolean> {
    // Try refreshing tokens using refresh token
    const refreshToken: string = localStorage.getItem("refreshToken");
    if (!token || !refreshToken) { 
      return false;
    }
    
    const credentials = JSON.stringify({ accessToken: token, refreshToken: refreshToken });
    let isRefreshSuccess: boolean;

    const refreshRes = await new Promise<AuthenticatedResponse>((resolve, reject) => {
      this.http.post<AuthenticatedResponse>("https://localhost:5081/api/token/refresh", credentials, {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      }).subscribe({
        next: (res: AuthenticatedResponse) => resolve(res),
        error: (_) => { reject; isRefreshSuccess = false;}
      });
    });

    localStorage.setItem("jwt", refreshRes.token);
    localStorage.setItem("refreshToken", refreshRes.refreshToken);
    isRefreshSuccess = true;

    return isRefreshSuccess;
  }
}