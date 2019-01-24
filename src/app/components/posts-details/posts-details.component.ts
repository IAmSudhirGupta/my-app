import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.css']
})
export class PostsDetailsComponent implements OnInit {
  postId: number;
  post = [];
  constructor(private postService: PostsService, private activeRoute: ActivatedRoute, private titleService: Title) { 
  }

  ngOnInit() {
    const queryParams = this.activeRoute.snapshot.queryParams;
    const routeParams = this.activeRoute.snapshot.params;
    this.postService.getPost(routeParams.id).subscribe((response)=>{
      this.titleService.setTitle(response.title);
      this.post = response;
      console.log(response);
    }), error=>{
      console.log(error);
    }
  }

}
