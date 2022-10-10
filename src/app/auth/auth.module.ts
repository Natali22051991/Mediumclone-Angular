import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; // зависимость для раюоты с формами

// все что сверху импорты из библиотек, а снизу свои
import { RegisterComponent } from 'src/app/auth/components/register/register.component'; //дучше все импорты писать с абсолютным путем
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';

const routes: Routes = [
  //делаем рендер в этом модуле
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  //стандартная запись для создания модуля
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
  ], //принимает объект(когда импортируем routes для модуля делаем через forChild)
  declarations: [RegisterComponent], //описываем в поле какие компоненты надо зарегистрировать
})
export class AuthModule {}
