import { Component } from '@angular/core';
import { CreateuserService } from '../../services/createuser.service';
import { Router } from '@angular/router';
import { Comments } from '../../models/comments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {

  constructor(private service:CreateuserService,
    private router: Router) { }

  submitted=false;
  /*comment is an obj */
  comment: Comments=new Comments();

  onSubmit()
  {
    this.submitted=true;
    this.addComments();
  }
  /*addComments is called using subscribe */
  addComments()
  {
    this.service.createComments(this.comment).subscribe();
  }
}

