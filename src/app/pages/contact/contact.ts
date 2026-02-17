import * as emailjs from '@emailjs/browser';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class Contact {

  constructor() {
  emailjs.init('LbB8vOO-rNUdL1wHX');
}

  // Form fields
  name: string = '';
  email: string = '';
  company: string = ''; 
   phone: string = '';
  message: string = '';

  // Submit function
sendEnquiry() {
  // Trim spaces
  if (
    !this.name?.trim() ||
    !this.email?.trim() ||
    !this.phone?.trim() ||
    !this.company?.trim() ||
    !this.message?.trim()
  ) {
    alert('Please fill all fields.');
    return;
  }

  const templateParams = {
  from_name: this.name,
  from_email: this.email,
  message: this.message,
  phone: this.phone,
  company: this.company
};


  emailjs
    .send(
      'unitysupply.in@gmail.com',    // Replace with EmailJS Service ID
      'template_op31s1p',   // Replace with EmailJS Template ID
      templateParams
    )
    .then(
      (response) => {
        alert('Your enquiry has been sent successfully!');
        console.log('SUCCESS!', response);

        // Reset form
        this.name = '';
        this.email = '';
        this.phone = '';
        this.company = '';
        this.message = '';
      },
      (error) => {
        alert('Failed to send enquiry.');
        console.error('FAILED...', error);
        console.log('Template Params:', templateParams);
      }
    );
}

}