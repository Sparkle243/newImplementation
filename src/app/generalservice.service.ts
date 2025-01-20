import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GeneralserviceService {
  setLoginDataList: any;
  
  constructor(private http: HttpClient) { }


  setLoginData(data:any){

  this.setLoginDataList = data
  }
  getLoginData(){

   return  this.setLoginDataList 
    }

  submitApproval(obj:any){
    return this.http.post('https://localhost/3000/api/submit/approval',obj);
  }
  getApprovalList(){
    return this.http.get('https://localhost/3000/api/get/approvalList');
  }
  userCreation(obj:any){
    return this.http.post('https://localhost/3000/api/user/create',obj);
  }
  userList(){
    return this.http.get('https://localhost/3000/api/user/getDetails');
  }
}
