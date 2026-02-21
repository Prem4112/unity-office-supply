import * as emailjs from '@emailjs/browser';

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class Contact implements OnInit {

  constructor(private meta: Meta, private titleService: Title) {
    emailjs.init('LbB8vOO-rNUdL1wHX');
  }

  ngOnInit(): void {
    // Set Page Title
    this.titleService.setTitle('Contact Us - Unity Office Supply');

    // Set Meta Tags
    this.meta.updateTag({
      name: 'description',
      content: 'Contact Unity Office Supply for office supplies, housekeeping materials, and corporate solutions in India.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'contact Unity Office Supply, office supplies India, corporate solutions, housekeeping materials'
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow'
    });

    // Set Canonical URL
    let link: HTMLLinkElement =
      document.querySelector("link[rel='canonical']") ||
      document.createElement('link');

    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', 'https://unityofficesupply.com/contact');
    document.head.appendChild(link);
  }

  // Form fields
  name: string = '';
  email: string = '';
  company: string = '';
  phone: string = '';
  message: string = '';

  // Submit function
  sendEnquiry() {
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
        'unitysupply.in@gmail.com',
        'template_op31s1p',
        templateParams
      )
      .then(
        (response) => {
          alert('Your enquiry has been sent successfully!');
          console.log('SUCCESS!', response);

          this.name = '';
          this.email = '';
          this.phone = '';
          this.company = '';
          this.message = '';
        },
        (error) => {
          alert('Failed to send enquiry.');
          console.error('FAILED...', error);
        }
      );
  }
}