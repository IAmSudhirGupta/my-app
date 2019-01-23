import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable <any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getPost(id): Observable <any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts'+id);
  }
  addPost(reqBody: Object):Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts',reqBody);
  }
  updatePost(id, reqBody: Object):Observable<any> {
    return this.http.put('https://jsonplaceholder.typicode.com/posts'+id, reqBody);
  }
  deletePost(id): Observable <any>{
    return this.http.delete('https://jsonplaceholder.typicode.com/posts'+id);
  }
}
