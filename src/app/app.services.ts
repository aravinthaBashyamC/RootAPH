import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ReplaySubject} from 'rxjs/ReplaySubject';
@Injectable()
export class dataServices {
    public dataForOpp:any={};
    public dataForBackground:any={};
    public dataForSkills:any={};
    selectedIndex:any;

  constructor(private http: Http) {

  }

getData(url :any) {

let bSubject = new ReplaySubject(); 

 //return this.http.get(url).subscribe(res => console.log(res.json())); 

 this.http.get(url).subscribe(result => {
    //push onto subject and complete
    bSubject.next(result.json())

 });

/*
 return this.http.get(url)
    .map((res:Response) => res.json()); 

    
    var postData ={"access_token" : 'dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c' };

 let headers = new Headers({ 'Content-Type': 'application/json' });
 //headers.append('access_token', 'dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c');
    let options = new RequestOptions({ headers: headers });
    debugger;
    return this.http.post(url, postData, options)
               .map(this.extractData)
               .catch(this.handleErrorObservable);
               */
  return bSubject;
  }


patchService(url: string, param: any): Observable<any> {
   var headers = new Headers({ 'Content-Type': 'application/json', 
                                     'Accept': 'q=0.8;application/json;q=0.9' });
    var options = new RequestOptions({ headers: headers });

    let body = JSON.stringify(param);
    return this.http
        .patch(url, body, options)
        .map(this.extractData)
        .catch(this.handleErrorObservable);
    } 

private extractData(res: Response) {
	let body = res.json();
        return body || {};
    }
    private handleErrorObservable (error: Response | any) {
	console.error(error.message || error);
	return Observable.throw(error.message || error);
    }
    private handleErrorPromise (error: Response | any) {
	console.error(error.message || error);
	return Promise.reject(error.message || error);
    }	

}