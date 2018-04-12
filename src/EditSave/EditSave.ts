import {Component} from '@angular/core';
import {dataServices}  from '../app/app.services';
import {Router} from '@angular/router';
@Component({
    selector: 'EditSave',
    templateUrl: 'EditSave.html',
})
export class EditSave {
    public router:any;
    public currentData:any;
    public getSkill:any={"name":""};
    public getBackGroud:any ={"name":""};
    public condition:boolean=true;
    public lablbtn="Edit";
    public mode="View";
    public dataSaveModal:{};
    public loc:string="";
    
    constructor(public _dataServices : dataServices) {
  
    }
dataSaved(data){

    if(data=="Edit"){
        this.mode="Edit";
       this.condition =false;
       this.lablbtn="Save"; 

    }else{
       this.condition =false;
       this.lablbtn="Edit";  

    }
var url = "http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/lists/backgrounds?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c";
    console.log("location::"+this.loc);

this._dataServices.patchService(url,this.currentData);
    
}
handleAddressChange(data){
    console.log("address"+data);

}
ngOnInit(){

console.log("data selecetd index::"+this._dataServices.selectedIndex);
this.currentData =this._dataServices.dataForOpp['data'][this._dataServices.selectedIndex];
this.getBackground();
this.getSkills();
  }



getBackground(){

 var url = "http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/lists/backgrounds?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c";
 //225
   this._dataServices.getData(url).subscribe(result => {
    //push onto subject and complete
   this._dataServices.dataForBackground =  result;
 var getBackResults=  this.search(this._dataServices.dataForBackground,"225");
 this.getBackGroud=getBackResults;
    console.log('getBackResults::'+JSON.stringify(this.getBackGroud));
});
}

search(dataArr,id): void {
    let term = id;
  return dataArr.filter(function(tag) {
        return tag.id== term;
    })[0]; 
}
getSkills(){

     var url = "http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/lists/skills?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c";
  //1170
   this._dataServices.getData(url).subscribe(result => {
    //push onto subject and complete
   this._dataServices.dataForSkills =  result;
    var getSkillResults=    this.search(this._dataServices.dataForSkills,"1170");
     this.getSkill=getSkillResults;
    console.log('getSkillResults::'+JSON.stringify(this.getSkill));
});
}



}