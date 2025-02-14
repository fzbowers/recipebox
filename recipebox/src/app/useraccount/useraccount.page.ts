import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { ApiService } from '../services/api.service';
import { User } from '../interfaces';

@Component({
  selector: 'app-useraccount',
  templateUrl: './useraccount.page.html',
  styleUrls: ['./useraccount.page.scss'],
})
export class UseraccountPage implements OnInit {

  user: any;
  username: any;
  email: any;

  searchQuery: string = '';

  constructor(
    private http: HttpClient,
    private _router: Router,
    private authService: AuthService,
    private apiService: ApiService,
    ) {
    this.email = '';
    this.username = '';
  }

    ngOnInit() {
      // maybe use different implementation
      this._router.events.subscribe(event => {
        // Check if it's a NavigationEnd event
        if (event instanceof NavigationEnd) {
          // Check if the current route is the home page
          if (event.url === '/useraccount') {
            // reload
            this.loadUserInfo();
          }
        }
      });
    }


  ionChange(event: any) {
    console.log("search event: ", event.detail.value)
    this.searchQuery = '';
    this._router.navigate(['/search', event.detail.value])
  }

  loadUserInfo() {
    this.apiService.get_all<{ user: User }>('useraccount').subscribe({
      next: (response) => {
        console.log('User response:', response);
        this.user = response.user;
        this.email = this.user.email;
        this.username = this.user.username;
        console.log(this.username);
        console.log(this.email);
      },
      error: (error) => {
        console.error('Error getting user:', error);
      },
      complete: () => {},
    });
  }

  // Temporary
  async logout() {
    try {
      await this.authService.logout();

    } catch (error) {
      // Handle logout errors, such as displaying an error message to the user
      console.error("Logout failed:", error);
    }

    // this.authService.logout().subscribe({
    //   next: (response) => {
    //     // alert('Logout Successful');
    //     this._router.navigate(['/login'])
    //   },
    //   error: (error) => {
    //     console.error('Logout failed:', error)
    //     // alert('Logout Failed: ' + error.message); // Display detailed error message
    //   },
    //   complete: () => {},
    // });
  }

  goToAccount() {
    this._router.navigate(['/useraccount'])
  }

  goHome(){
    this._router.navigate(['/home'])
  }

}
