import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newsection',
  templateUrl: './newsection.page.html',
  styleUrls: ['./newsection.page.scss'],
})
export class NewsectionPage implements OnInit {
  section = {
    title: '',
    description: '',
  };

  constructor(private http: HttpClient, private _router: Router) { }

  ngOnInit() {
  }

  saveSection() {
    this.http.post('http://127.0.0.1:5000/sections/', this.section)
        .subscribe({
          next: (response) => {
            console.log('POST Response:', response);
            // this.router.navigate(['/singlesection']); // change later
          },

          error: (error) => {
            console.error("POST error", error);
          },

          complete: () => {},
      });
    }


  goHome(){
    this._router.navigate(['/home'])
  }

}
