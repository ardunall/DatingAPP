import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ApiError } from '../../../types/error';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-server-error',
  imports: [],
  templateUrl: './server-error.html',
  styleUrl: './server-error.css'
})
export class ServerError {
protected error: ApiError;
private router = inject(Router)
protected showDetails = signal(false);;

  constructor() {
    const navigation = this.router.currentNavigation();
    this.error = navigation?.extras?.state?.["error"]
  }


  detailsToggle() {
    this.showDetails.set(!this.showDetails());

  }

}
