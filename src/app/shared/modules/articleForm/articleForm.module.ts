import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleFormComponent } from 'src/app/shared/modules/articleForm/components/articleForm/articleForm.component';
import { BackendErrorMessagesModule } from 'src/app/shared/modules/backendErrorMassages/backendErrorMessages.module';

@NgModule({
  imports: [CommonModule, BackendErrorMessagesModule, ReactiveFormsModule],
  declarations: [ArticleFormComponent],
  exports: [ArticleFormComponent],
})
export class ArticleFormModule {}
