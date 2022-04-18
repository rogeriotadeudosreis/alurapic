import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
  templateUrl: './signup.component.html',
})
export class SignUpComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private useNotTakenValidatorService: UserNotTakenValidatorService,
    private signUpService: SignUpService,
    private router: Router
  ) {}

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
        [this.useNotTakenValidatorService.checkUserNameTaken()],
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
    const newUser = this.formSignUp.getRawValue() as NewUser;
    this.signUpService.register(newUser).subscribe(
      () => this.router.navigate(['']),
      (err) => console.log('ERRO: ' + err)
    );
  }
}
