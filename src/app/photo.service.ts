/* * * ./app/comments/services/comment.service.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Photo }           from './photo';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PhotoService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url
     private postsUrl = 'http://backend.loicmaupin.com/wp-json/wp/v2/posts'; 

     // Fetch all existing comments
     getPosts() : Observable<Photo[]> {
      console.log(this.postsUrl);
               // ...using get request
               return this.http.get(this.postsUrl)
                              // ...and calling .json() on the response to return data
                               .map((res:Response) => res.json())
                               //...errors if any
                               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
      
           }

}