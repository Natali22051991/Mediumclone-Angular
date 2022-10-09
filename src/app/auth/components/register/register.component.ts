import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  //стандартный декоратор для создания компонента
  selector: 'mc-register', //пишем префикс mc,помоает отличать нашу библиотеку от сторонних
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'], //в скобках потому что массив
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {}
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
  }
}
