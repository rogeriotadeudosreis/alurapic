import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';

@Component({
  templateUrl: './signup.component.html',
})
export class SignUpComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createFormBuilder();
  }

  formSignUp: FormGroup;

  createFormBuilder() {
    this.formSignUp = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ],
      ],
      userName: [
        '',
        [
          Validators.required,
          LowerCaseValidator,
          Validators.minLength(3),
          Validators.maxLength(40),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
        ],
      ],
    });
  }

  register() {
    console.log('registrar', this.formSignUp.value);
  }
}
