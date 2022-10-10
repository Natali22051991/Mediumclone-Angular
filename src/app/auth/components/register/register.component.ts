import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { registerAction } from 'src/app/auth/store/actions/register.action';

@Component({
  //стандартный декоратор для создания компонента
  selector: 'mc-register', //пишем префикс mc,помоает отличать нашу библиотеку от сторонних
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'], //в скобках потому что массив
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private store: Store) {}
  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: '',
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
    this.store.dispatch(registerAction(this.form.value)); //диспатчим экшены
  }
}
