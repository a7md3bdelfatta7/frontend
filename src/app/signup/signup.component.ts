import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { UsernameValidators } from './username.validator';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form=new FormGroup({
    account : new FormGroup({
      username:new FormControl('',[Validators.required,Validators.minLength(3),UsernameValidators.cannotcontainspace],UsernameValidators.shouldBeUnique),
      password:new FormControl('',Validators.required)
    }),
    topics : new FormArray([])
  });

  constructor() { }

  ngOnInit() {
  }

  get username(){
    return this.form.get('account.username');
  }

  addTopic(topic : HTMLInputElement){
    this.topics.push(new FormControl([topic.value]));
    topic.value='';
  }

  get topics(){
    return (this.form.get('topics') as FormArray)
  }



}
