import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { AppStateService } from './app-state.service';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private appState: AppStateService) {}
  private host: string = 'http://localhost:9000/users';

  async login(username: string, password: string) {
    let user: any = await firstValueFrom(
      this.http.get(`${this.host}/` + username)
    );
    if (password == atob(user.password)) {
      let decodedJwt: any = jwtDecode(user.token);
      this.appState.setAuthState({
        isAuthenticated: true,
        username: decodedJwt.sub,
        roles: decodedJwt.roles,
        token: user.token,
      });
      console.log(this.appState.authState.username)
      return Promise.resolve(true);
    } else {
      return Promise.reject('Bad credentials');
    }
  }

  authenticateUser(user: Object) {}
}
