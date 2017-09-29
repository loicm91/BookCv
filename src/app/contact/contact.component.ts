import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  rForm: FormGroup;
  post: any;
  name: string = '';
  mail: string = '';
  message: string ='';
  nameAlert: string = 'Un nom ou prénom est requis';
  mailAlert: string = 'Une adresse mail est requis';
  messageAlert: string = 'Une message est requis';

  constructor(private fb: FormBuilder) { 
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'mail': [null, Validators.required],
      'message': [null, Validators.compose([Validators.required])],
      'validate': ''
    });

  }

  ngOnInit() {
    this.loadScript('assets/js/Menuclassie.js');
    this.loadScript('assets/js/InputEffect.js');
    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.nameAlert = "Il faut au moins 3 charactères";
          this.rForm.get('mail').setValidators([Validators.required, Validators.email]);
          this.mailAlert = "Le mail n'est pas conforme"; 
          this.rForm.get('message').setValidators([Validators.required, Validators.minLength(30), Validators.maxLength(500)]);
          this.messageAlert = "Il faut entre 30 et 500 charactères";
        } else {
          this.rForm.get('name').setValidators(Validators.required);
          this.rForm.get('mail').setValidators(Validators.required);
          this.rForm.get('message').setValidators(Validators.required);
        }
        this.rForm.get('name').updateValueAndValidity();
        this.rForm.get('mail').updateValueAndValidity();
        this.rForm.get('message').updateValueAndValidity();
      }
    )
  }

  addPost(post){
    this.name = post.name;
    this.mail = post.mail;
    this.message = post.message;
    
  }

  public loadScript(url) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
 }



}
