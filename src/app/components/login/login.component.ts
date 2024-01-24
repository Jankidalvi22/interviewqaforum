import { Component } from '@angular/core';
import { User } from '../../models/User';
import { CreateuserService } from '../../services/createuser.service';
import { Router } from '@angular/router';
import { Login } from '../../models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

 
  login : Login = new Login();

  constructor(private service:CreateuserService,
    private router: Router) { }

  submitted=false;

  onSubmit()
  {
    this.submitted=true;
    this.loginUser();
  }

  loginUser()
  {
    this.service.loginUser(this.login).subscribe();
  }
    
}
