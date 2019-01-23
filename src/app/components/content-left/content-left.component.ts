import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
@Component({
  selector: 'app-content-left',
  templateUrl: './content-left.component.html',
  styleUrls: ['./content-left.component.css']
})
export class ContentLeftComponent implements OnInit {
  posts = [];
  today = new Date();
  
  constructor( private postService: PostsService) {
    console.log(this.today);
      //this.postDate =  this.datePipe.transform(this.postDate, 'yyyy-MM-dd');
   }

  ngOnInit() {
    this.postService.getAllPosts().subscribe((response)=>{
      this.posts = response;
      console.log(response);
    }), error => {
      console.log("Error",error);
    }
  }
  upVode(event) {
    event.preventDefault();
    console.log('upvote..', event);
  }
  downVote(event) {
    console.log('donwvote',event);
  }

}
