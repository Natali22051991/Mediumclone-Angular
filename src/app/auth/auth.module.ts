import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; // зависимость для раюоты с формами

// все что сверху импорты из библиотек, а снизу свои
import { RegisterComponent } from 'src/app/auth/components/register/register.component'; //дучше все импорты писать с абсолютным путем
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { AuthService } from './services/auth.service';
import { RegisterEffect } from './store/effects/regisret.effect';
import { EffectsModule } from '@ngrx/effects';
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMassages/backendErrorMessages.module';
import { PersistanceService } from '../shared/services/persistance.service';
import { LoginEffect } from './store/effects/login.effect';
import { LoginComponent } from './components/register/login/login.component';

const routes: Routes = [
  //делаем рендер в этом модуле
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  //стандартная запись для создания модуля
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
    StoreModule.forFeature('auth', reducers),
    BackendErrorMessagesModule,
  ], //принимает объект(когда импортируем routes для модуля делаем через forChild)
  declarations: [RegisterComponent, LoginComponent], //описываем в поле какие компоненты надо зарегистрировать
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
