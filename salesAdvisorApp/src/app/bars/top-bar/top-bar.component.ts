import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  user: any;
  txtName: string ='';

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

 
  toLoginView(){    
    localStorage.removeItem('token');  
    this.router.navigate(['/authentication/login']);
  }
}
