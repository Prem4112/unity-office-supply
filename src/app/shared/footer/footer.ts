import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-footer',
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],   // <-- fixed here
  standalone: true
})
export class Footer {

  // Stars array
  stars: number[] = [1, 2, 3, 4, 5];

  // Selected and hovered ratings
  rating: number = 0;
  hoveredRating: number = 0;

  // Message after submission
  message: string = '';

  // Set rating on click
  setRating(value: number) {
    this.rating = value;
  }

  // Hover effect
  hoverRating(value: number) {
    this.hoveredRating = value;
  }

  // Submit rating
  submitRating() {
    if (this.rating > 0) {
      console.log('Customer rated:', this.rating);
      this.message = `Thank you for rating us ${this.rating} star${this.rating > 1 ? 's' : ''}!`;
      // TODO: send rating to backend API
    }
  }
}
