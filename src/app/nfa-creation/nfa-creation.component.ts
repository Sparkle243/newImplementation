import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';
import { GeneralserviceService } from '../generalservice.service';

@Component({
  selector: 'app-nfa-creation',
  templateUrl: './nfa-creation.component.html',
  styleUrls: ['./nfa-creation.component.css']
})
export class NFACreationComponent implements OnInit {
  NFACreationForm!: FormGroup;
  public submited:boolean=false
  public NFAList:any
  constructor(private fb: FormBuilder,private service:GeneralserviceService) {
   
  }

  ngOnInit(): void {
    this.NFACreationForm = this.fb.group({
      project: [""],
      function: [""],
      date: [""],
      companyName: [""],
      vendor1: [null],
      vendor2: [null, ],
      WBSElement: [null],
      Subject:[null],
      rows: this.fb.array([]),
    });
    

    this.addRow(); 
  }
  get f(){

     return this.NFACreationForm.controls
  }
    // Getter for the rows FormArray
      get rows(): FormArray {
        return this.NFACreationForm.get('rows') as FormArray;
      }
  // Add a new row to the FormArray
  addRow() {
    // if (this.nfaReport.invalid) {
    //   alert('Please fill all required fields before adding a new row!');
    //   return; // Prevent adding a new row
    // }
    const newRow = this.fb.group({
      description: [null],  
      material: [null,],  
      UOM: [null,],  
      quantity: [null],  
      preRate: [null,], 
      vendor1Rate: [null,],  
      vendor1Amount: [null],  
      vendor2Rate: [null], 
      vendor2Amount:[null] 
       
    });
    this.rows.push(newRow);  // Add the new row to FormArray
    console.log("this.rows",this.rows.value)
  }

  // Remove a row from the FormArray
  removeRow(index: number) {
    this.rows.removeAt(index);
  }
  rowData(){
    console.log("rowData",this.rows.value)
  }

  onClickSubmit(){
    let obj={
      "header": {
          "project": this.NFACreationForm.value.project,
          "function": this.NFACreationForm.value.function,
          "date":this.NFACreationForm.value.date,
          "companyName":this.NFACreationForm.value.companyName,
          "vender1":this.NFACreationForm.value.vendor1,
          "vender2":this.NFACreationForm.value.vendor2,
          "WBSElement":this.NFACreationForm.value.WBSElement,
          "subject":this.NFACreationForm.value.Subject
      },
      "Item": this.rows.value
  }
  console.log("obj",obj)
    this.service.submitApproval(obj).subscribe((res:any)=>{
      console.log("onClickSubmit", res)

    },error=> {

    })
  }
}
