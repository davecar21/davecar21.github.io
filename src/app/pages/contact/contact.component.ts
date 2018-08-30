import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  isSubmitted = false;

  dataLink = 'https://script.google.com/macros/s/AKfycbwmt_znXdUF-3qIL2FLZ57gfrsOh9rCSU7GWZpWK5gvQ5L5bdo/exec';


  contact = this.fb.group({
    name: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
    email: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.email])],
    message: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
  });


  ngOnInit() {
    const node = document.createElement('iframe');
    node.setAttribute('name', 'hidden_iframe');
    node.setAttribute('src', this.dataLink);
    node.style.display = 'none';
    document.body.appendChild(node);
  }

  onSubmit() {
    this.isSubmitted = this.isSubmitted ? false : true;
  }

}
