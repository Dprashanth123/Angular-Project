import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-w4',
  templateUrl: './w4.component.html',
  styleUrls: ['./w4.component.css']
})
export class W4Component implements OnInit {

  onSubmit(form: NgForm){
    console.log(form);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
