import { Component, input } from '@angular/core';

@Component({
  selector: 'app-star-button',
  imports: [],
  templateUrl: './star-button.html',
  styleUrl: './star-button.css'
})
export class StarButton {

  disabled = input<boolean>();
  seleceted = input<boolean>();


}
