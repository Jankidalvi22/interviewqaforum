import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/User';
import { CreateuserService } from '../../services/createuser.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  user : User = new User();

  constructor(private service:CreateuserService,
    private router: Router) { }

  submitted=false;

  onSubmit()
  {
    this.submitted=true;
    this.addUser();
  }
  addUser()
  {
    this.service.createUser(this.user).subscribe();
  }
    

}
