import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationDTO } from 'src/app/models/login';
import { AuthenticationService } from '../authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginReq:AuthenticationDTO={
    username: 'walter',
    password: 'micodigo'
  } 
  user: any;
  constructor(private router: Router,
    private authService: AuthenticationService,
    ) {
   } 
  ngOnInit(): void {        
  } 
  Login(){    
    this.authService.Loginusuario(this.loginReq).subscribe( res =>{      
      console.log("login", res.objModel)      
      if(res.objModel != null){
        localStorage.setItem('token', res.objModel || '');       
          this.router.navigate(['/system-users/candidate/my-data']);        
      }else{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error',
          text:'Usuario o contraseña incorrectas',
          showConfirmButton: true,          
        });
      }
     
    })
  }  
}
