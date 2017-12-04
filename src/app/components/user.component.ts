import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';
@Component({
  // This is to set relative path
  moduleId : module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})
export class UserComponent  { 
  name:  string ;
  email: string;
  address: address;
  hobbies: [string];

  showHobies : Boolean;

  posts : [post];

  constructor(private postService : PostsService){
      console.log('inside const..');
      this.name = 'Srikant mukundan';
      this.email = 'srikantmukund@gmail.com';
    
      this.address = {
        street : '211 w Orcahrd',
        city : 'boston',
        state : 'MA'
      }
      this.hobbies = ['Music', 'Movies', 
    'sports'];
    this.showHobies = false;

    this.postService.getPosts().subscribe(posts =>{
      console.log('print the jsons');
      this.posts = posts;
    });

    console.log('outside end');

  }

  toggleHobbies(){
   if(this.showHobies){
    this.showHobies = false;   
   }else{
    this.showHobies = true;
   }

  }
  addHobby(hobby : string){
    this.hobbies.push(hobby);
  }

  deleteHobby(index : number){
    this.hobbies.splice(index,1);
  }
 }


 
 interface address{
    street: string;
    city: string;
    state: string;
}

interface post{
  userId: number,
  id: number,
  title: string,
  body : string
}