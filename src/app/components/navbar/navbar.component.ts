import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppStateService } from '../../services/app-state.service';
import { LoadingService } from '../../services/loading.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  keyword: String = '';
  isLoggedIn:boolean = false;
  user:string = ''
  constructor(
    public appState: AppStateService,
    public loadingService: LoadingService,
    public authState: AuthService,
    private router: Router
  ) {
    // this.loadingService.isLoading$.subscribe({
    //   next: (isLoading) => {
    //     this.isLoading = isLoading;
    //   }
    // })
  }
  ngOnInit(): void {
    console.log(this.appState.authState.username+"llll");
    this.isLoggedIn = this.appState.authState.isAuthenticated;
    this.user = this.appState.authState.username;

  }

  // public isLoading : boolean = false;
  actions: Array<any> = [
    { title: 'Home', route: '/home', icon: 'home' },
    { title: 'Products', route: '/admin/products' },
    { title: 'Orders', route: '/orders' },
    { title: 'Customers', route: '/customers' },
  ];
  currentAction: any;
  setCurrentAction(action: any) {
    this.currentAction = action;
  }
  logout() {
    this.appState.setAuthState({});
    this.router.navigateByUrl('/login')
  }

  login(){
    this.router.navigateByUrl('/admin/products')
  }
}
