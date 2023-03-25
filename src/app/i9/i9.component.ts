
import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { Form, NgForm } from '@angular/forms';


@Component({
  selector: 'app-i9',
  templateUrl: './i9.component.html',
  styleUrls: ['./i9.component.css']
})
 export class I9Component implements OnInit {

  showMe: boolean=false;
  showProp: boolean=false;

   lastName='';
   firstName='';
   middleInitial='';
   otherNameUsed='';
   address='';
   aptNumber='';
   cityOrTown='';
   state='';
   zipCode='';
   dateOfBirth='';
   securityNumber='';
   email='';
   telephone='';

 onSubmit(form: NgForm){
  console.log(form);
 }

 onClick(){
  console.log("Last Name : "+this.lastName);
  console.log("First Name : "+this.firstName);
  console.log("Middle Intial : "+this.middleInitial);
  console.log("Other Name Used : "+this.otherNameUsed);
  console.log("Address : "+this.address);
  console.log("Apt.Number : "+this.aptNumber);
  console.log("City Or Town : "+this.cityOrTown);
  console.log("State : "+this.state);
  console.log("Zip Code : "+this.zipCode);
  console.log("Date Of Birth : "+this.dateOfBirth);
  console.log("Security Number : "+this.securityNumber);
  console.log("Email ID : "+this.email);
  console.log("Telephone : "+this.telephone);
}
  constructor() {
  }

  ngOnInit(): void {
  }

}
