import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  styleUrls: ['./backendErrorMessages.component.css'],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors')
  backendErrorsProps!: BackendErrorsInterface | null;

  errorMessages!: string[];

  ngOnInit(): void {
    this.errorMessages =
      this.backendErrorsProps !== null
        ? Object.keys(this.backendErrorsProps).map((name: string) => {
            const messages = this.backendErrorsProps![name].join(', ');
            return `${name} ${messages}`;
          })
        : [];
  }
}
