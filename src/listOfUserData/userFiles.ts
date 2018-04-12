import {Component} from '@angular/core';
import {dataServices}  from '../app/app.services';
import {Router} from '@angular/router';
@Component({
    selector: 'userFiles',
    templateUrl: 'userFiles.html',
})
export class userFiles {
    constructor(public _dataServices : dataServices,public router: Router) {
  
    }

ngOnInit(){
   var url = "https://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c";
  
   this._dataServices.getData(url).subscribe(result => {
    //push onto subject and complete
   this._dataServices.dataForOpp =  result;
  
});
 

  }

dataClick(dataServices,index){

this._dataServices.selectedIndex=index;

this.router.navigateByUrl('/EditSave');
    

}



}