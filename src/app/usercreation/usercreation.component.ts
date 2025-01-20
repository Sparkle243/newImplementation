import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralserviceService } from '../generalservice.service';
@Component({
  selector: 'app-usercreation',
  templateUrl: './usercreation.component.html',
  styleUrls: ['./usercreation.component.css']
})
export class UsercreationComponent implements OnInit {
  userCreationForm!:FormGroup
  dialogRef: any;
  closeResult: any;
  userList: any;
  constructor(private modalService: NgbModal,private fb: FormBuilder,private service:GeneralserviceService) {}

  ngOnInit(): void {
    this.userCreationForm = this.fb.group({
      userName: [''],
      firstName: [''],
      lastName: [''],
      email: [''],
      contact:[''],
      password: [''],
      confirmPassword: [''],
      plant: [''],
      function: [''],
      other: [''],
      design: ['']
        });
        this.getDetails()
  }
  newUserCreation(newUserTemplate:any){
    console.log("open popup")
    // let ngbmodaloptions: NgbModalOptions = {
    //           backdrop: 'static',
    //           keyboard: false,
    //           size: 'lg'
    //         }
    //         this.dialogRef = this.modalService.open(newUserTemplate, ngbmodaloptions);
    //         this.dialogRef.result.then((result:any) => {
    //             this.closeResult = `Closed with: ${result}`;
    //         });
    
    this.modalService.open(newUserTemplate,{ animation: false, backdrop: 'static', keyboard: false });
  }
  closemodalAccountSearch() {
 
        this.dialogRef.close();
      }
  submitUserForm(modal: any) {
    modal.close('Save click'); // Close the modal after form submission
    let creatObj ={
      "firstName":this.userCreationForm.value.userName,
      "userName":this.userCreationForm.value.firstName,
      "lastName":this.userCreationForm.value.lastName,
      "email":this.userCreationForm.value.email,
      "password":this.userCreationForm.value.password,
      "confPassword":this.userCreationForm.value.confirmPassword,
      "function":this.userCreationForm.value.function,
      "contact":this.userCreationForm.value.contact,
      "plant":this.userCreationForm.value.plant,
      "Design":this.userCreationForm.value.design
      }
      console.log("creatObj",creatObj)
    this.service.userCreation(creatObj).subscribe((res:any)=>{
      console.log("submitUserForm",res)
      console.log('apiErr',res,res.responseData) ;
    },error =>{
    //   const apiErr ={
    //     "responseData": {
    //         "message": "User created successfully",
    //         "data": {
    //             "userName": "param",
    //             "firstName": "param",
    //             "lastName": "",
    //             "email": "param@gmai2.com",
    //             "password": "12345",
    //             "confPassword": "12345",
    //             "contact": 768786876,
    //             "plant": 1100,
    //             "Design": "Manager",
    //             "function": "",
    //             "_id": "678dcba63530478a0f425931",
    //             "__v": 0
    //         }
    //     }
    // }
    // console.log('apiErr',apiErr,apiErr.responseData) ;

    })
    
  }
  getDetails(){
    this.userList = []
    this.service.userList().subscribe((res:any)=>{
      this.userList = res.responseData.data
      console.log("this.userList",this.userList)
    },error =>{
    //   const apiErr = {
    //     "responseData": {
    //         "message": "Users fetched successfully",
    //         "data": [
    //             {
    //                 "_id": "678bf6160d2e2c0291c9025a",
    //                 "userName": "param",
    //                 "firstName": "param",
    //                 "lastName": "",
    //                 "email": "param@gmail.com",
    //                 "password": "12345",
    //                 "confPassword": "12345",
    //                 "contact": 7868766576,
    //                 "plant": 1100,
    //                 "Design": "Manager",
    //                 "function": "",
    //                 "__v": 0
    //             },
    //             {
    //                 "_id": "678ca338076cc2f338738b32",
    //                 "userName": "param",
    //                 "firstName": "paramesh",
    //                 "lastName": "",
    //                 "email": "param@gmail1.com",
    //                 "password": "12345",
    //                 "confPassword": "12345",
    //                 "contact": 7868766576,
    //                 "plant": 1100,
    //                 "Design": "Manager",
    //                 "function": "",
    //                 "__v": 0
    //             },
    //             {
    //                 "_id": "678dcba63530478a0f425931",
    //                 "userName": "param",
    //                 "firstName": "param",
    //                 "lastName": "",
    //                 "email": "param@gmai2.com",
    //                 "password": "12345",
    //                 "confPassword": "12345",
    //                 "contact": 768786876,
    //                 "plant": 1100,
    //                 "Design": "Manager",
    //                 "function": "",
    //                 "__v": 0
    //             }
    //         ]
    //     }
    // }
    // this.userList = apiErr.responseData.data
    // console.log("this.userList",this.userList)
    })
  }
}

