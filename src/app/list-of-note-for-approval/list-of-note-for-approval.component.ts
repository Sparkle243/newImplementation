import { Component, OnInit } from '@angular/core';
import { GeneralserviceService } from '../generalservice.service';

@Component({
  selector: 'app-list-of-note-for-approval',
  templateUrl: './list-of-note-for-approval.component.html',
  styleUrls: ['./list-of-note-for-approval.component.css']
})
export class ListOfNoteForApprovalComponent implements OnInit {
  approvalListData: any;
  headersList: any;

  constructor(private service:GeneralserviceService) { }

  ngOnInit(): void {
    this.approvalList()
  }
  approvalList(){
    this.approvalListData = []
    this.headersList = []
    this.service.getApprovalList().subscribe((res:any)=>{
      console.log("approvalList",res);
      this.approvalListData = res.responseData.data;
      console.log('this.approvalListData',this.approvalListData)
      this.headersList = this.approvalListData.map((item:{header:any}) => item.header);
      console.log("headersList",this.headersList);
    },error =>{
      console.log("error")
  //    const apiError = {
  //     "responseData": {
  //         "message": "ApprovalList fetched successfully",
  //         "data": [
  //             {
  //                 "header": {
  //                     "project": "DEF",
  //                     "function": "func",
  //                     "date": "19-01-2025",
  //                     "companyName": "abc",
  //                     "vender1": "vender1",
  //                     "vender2": "vender2",
  //                     "WBSElement": "WBSElement",
  //                     "subject": "subject",
  //                     "referenceNo": 100001,
  //                 },
  //                 "_id": "678d12073530478a0f425925",
  //                 "Item": [
  //                     {
  //                         "Description": "Description",
  //                         "Material": "8",
  //                         "UOM": "ST",
  //                         "Quantity": "20",
  //                         "PreRate": "preRate",
  //                         "vender1Rate": "rate",
  //                         "vender1Amount": "100",
  //                         "vender2Rate": "rate2",
  //                         "vender2Amount": "200",
  //                         "_id": "678d12073530478a0f425926"
  //                     }
  //                 ],
  //                 "referenceNo": 100001,
  //                 "createdAt": "2025-01-19T14:53:59.514Z",
  //                 "updatedAt": "2025-01-19T14:53:59.514Z",
  //                 "__v": 0
  //             },
  //             {
  //                 "header": {
  //                     "project": "DEF",
  //                     "function": "func",
  //                     "date": "19-01-2025",
  //                     "companyName": "abc",
  //                     "vender1": "vender1",
  //                     "vender2": "vender2",
  //                     "WBSElement": "WBSElement",
  //                     "subject": "subject",
  //                     "referenceNo": 100002,
  //                 },
  //                 "_id": "678d12193530478a0f425929",
  //                 "Item": [
  //                     {
  //                         "Description": "Description",
  //                         "Material": "8",
  //                         "UOM": "ST",
  //                         "Quantity": "20",
  //                         "PreRate": "preRate",
  //                         "vender1Rate": "rate",
  //                         "vender1Amount": "100",
  //                         "vender2Rate": "rate2",
  //                         "vender2Amount": "200",
  //                         "_id": "678d12193530478a0f42592a"
  //                     }
  //                 ],            
  //                 "createdAt": "2025-01-19T14:54:17.121Z",
  //                 "updatedAt": "2025-01-19T14:54:17.121Z",
  //                 "__v": 0
  //             }
  //         ]
  //     }
  // }
  // console.log("apiError",apiError);
  // this.approvalListData = apiError.responseData.data
  // this.headersList = this.approvalListData.map((item:{header:any}) => item.header);
  // console.log("headersList",this.headersList);
    })

  }

}
