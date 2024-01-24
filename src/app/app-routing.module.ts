import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CommentsComponent } from './components/comments/comments.component';
import { TopicsComponent } from './components/topics/topics.component';
import { AddTopicComponent } from './components/add-topic/add-topic.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { TopicDetailsComponent } from './components/topic-details/topic-details.component';
import { UpdateTopicComponent } from './components/update-topic/update-topic.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },

{
  path:'aboutus',
  component:AboutusComponent
},
  {
    path:'contactus',
    component:ContactusComponent
  }
  ,
  
  {
    path:'add',
    component:RegistrationComponent
  },

  {
    path:'login',
    component: LoginComponent
  }
  ,
  {
    path:'comments',
    component: CommentsComponent
  }
  
  ,
  {
    path:'topic',
    component: TopicsComponent
  }
  ,

  {
    path:'addT',
    component:AddTopicComponent
  },
  
  {
    path:'tList',
    component:TopicListComponent
  },
  {
    path:'details/:topicId',
    component:TopicDetailsComponent 
  },
  {
    path:'update/:topicId',
    component:UpdateTopicComponent 
   },
   {
      path:'createPost',
      component: PostComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
