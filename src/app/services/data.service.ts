import { NotFoundError, AppError, BadRequestError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/operator/retry";
import "rxjs/add/observable/throw";
import { Observable } from "rxjs/Observable";


@Injectable()
export class DataService {

   constructor(private url:string,private http: Http) {
   
   }
                                                                                                 
   getAll()
   {
     return(this.http.get(this.url))
     .map((response)=>response.json());
   }
 
   create(resource)
   {
     return this.http.post(this.url,JSON.stringify(resource))
     .map(response=>response.json())
     .catch((error:Response)=>{
       if(error.status === 400)
        {
          return Observable.throw(new BadRequestError(error.json()));
        }
        else
        {
          return Observable.throw(new AppError(error.json()));
        }
     });
   }

   update(resource)
   {
     return this.http.patch(this.url+'/'+resource.id,JSON.stringify(resource))
     .map(response=>response.json());
   }

   delete(resource)
   {
     return this.http.delete(this.url+'/'+resource.id)
     .retry(2)
     .catch(this.handleError);

   }

   private handleError(error : Response) 
   {
     if(error.status===404)
     {
        return Observable.throw(new NotFoundError(error.json()));
     }
     else if(error.status === 400)
     {
        return Observable.throw(new BadRequestError(error.json()));
     }
     else
     {
        return Observable.throw(new AppError(error.json()));
     }
   }
}