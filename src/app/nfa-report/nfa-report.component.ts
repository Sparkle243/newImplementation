import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nfa-report',
  templateUrl:'./nfa-report.component.html',
  styleUrls: ['./nfa-report.component.css']
})
export class NfaReportComponent implements OnInit {

  nfaReport!: FormGroup;
    sharedParentData: any;
    showChild:boolean=true
    constructor(private fb: FormBuilder,private router: Router) {}
  
    ngOnInit(): void {
      // Initialize form with FormArray for table rows
      this.nfaReport = this.fb.group({
        rows: this.fb.array([]),
      });
  
      this.addRow();  // Adds a default empty row on load
    }
  
    // Getter for the rows FormArray
    get rows(): FormArray {
      return this.nfaReport.get('rows') as FormArray;
    }
  
    // Add a new row to the FormArray
    addRow() {
      // if (this.nfaReport.invalid) {
      //   alert('Please fill all required fields before adding a new row!');
      //   return; // Prevent adding a new row
      // }
      const newRow = this.fb.group({
        id: [this.rows.length + 1],  // Auto-incrementing ID
        plant: [null,],  
        function: [null,],  
        dateRange: [null],  
        vendor: [null,], 
        wbsElement: [null,],  
        approverId: [null],  
        companyCode: [null,],  
         
      });
      this.rows.push(newRow);  // Add the new row to FormArray
      console.log("this.rows",this.rows)
    }
  
    // Remove a row from the FormArray
    removeRow(index: number) {
      this.rows.removeAt(index);
    }
  
    // Save the form (you can send this to a backend or handle locally)
    saveForm() {
      console.log('Form Data:', this.nfaReport.value,this.nfaReport.value.rows);
      if (this.nfaReport.valid) {
        // Handle form submission (e.g., send to backend)
       
        this.sharedParentData = this.nfaReport.value.rows; // Get form data
      console.log("Data to pass:", this.sharedParentData);
      this.router.navigate(['/employeeDetails'], { state: { data: this.sharedParentData } });
       this.showChild = false
      } else {
        this.showChild = true
        alert('Form is invalid!');
      }
    }
}
