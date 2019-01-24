import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Title }     from '@angular/platform-browser';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = [];
  today = new Date();
  
  constructor( private postService: PostsService, private titleService: Title) {
    console.log(this.today);
      //this.postDate =  this.datePipe.transform(this.postDate, 'yyyy-MM-dd');
   }

  ngOnInit() {
    this.titleService.setTitle( 'Posts' );
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
