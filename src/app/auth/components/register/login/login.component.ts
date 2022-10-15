import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loginAction } from 'src/app/auth/store/actions/login.action';
import { LoginRequestInterface } from 'src/app/auth/types/loginRequest.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { AuthService } from '../../../services/auth.service';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../../store/selectors';

@Component({
  //стандартный декоратор для создания компонента
  selector: 'mc-login', //пишем префикс mc,помоает отличать нашу библиотеку от сторонних
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'], //в скобках потому что массив
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$!: Observable<boolean>;
  backendErrors$!: Observable<BackendErrorsInterface | null>;
  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.initializeForm();
    this.initializevalues();
  }

  initializevalues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    console.log('isSubmitting', this.isSubmitting$);
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: '',
      password: '',
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
    const request: LoginRequestInterface = {
      user: this.form.value,
    };
    this.store.dispatch(loginAction({ request })); //диспатчим экшены
  }
}
