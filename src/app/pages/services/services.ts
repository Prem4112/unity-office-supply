import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.html',
  styleUrls: ['./services.css'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Services implements OnInit {

  constructor(private router: Router, private meta: Meta, private titleService: Title) {}

  ngOnInit(): void {
    // Set SEO Title
    this.titleService.setTitle('Services - Unity Office Supply');

    // Meta Description
    this.meta.updateTag({
      name: 'description',
      content: 'Discover the services offered by Unity Office Supply, including housekeeping supplies, pantry supplies, office stationery, corporate solutions, safety equipment, and more.'
    });

    // Keywords
    this.meta.updateTag({
      name: 'keywords',
      content: 'Unity Office Supply services, office supplies India, housekeeping, pantry, office stationery, corporate solutions, safety equipment'
    });

    // Robots
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    // Canonical URL
    let link: HTMLLinkElement = document.querySelector("link[rel='canonical']") || document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', 'https://unityofficesupply.com/services');
    document.head.appendChild(link);
  }

  // Services list
  services = [
    {
      name: 'Housekeeping Supplies',
      image: 'pantry/housekeeping.jpg',
      description: 'Floor cleaners, phenyl, hand wash, mops, brooms, dusters, garbage bags.',
      delivery: '2–3 Working Days',
      credit: '15–30 Days'
    },
    {
      name: 'Pantry Supplies',
      image: 'pantry/pantry.jpg',
      description: 'Tea, coffee, sugar, biscuits, snacks, drinking water, disposable cups.',
      delivery: '2–3 Working Days',
      credit: '15–30 Days'
    },
    {
      name: 'Office Stationery',
      image: 'pantry/office.jpg',
      description: 'Paper, files, pens, markers, printer & copier supplies, desk essentials.',
      delivery: '2–3 Working Days',
      credit: '15–30 Days'
    },
    {
      name: 'Workspace & Corporate Supplies',
      image: 'pantry/workspace.jpg',
      description: 'Office utility products, common area supplies, corporate gifting, bulk orders.',
      delivery: '2–3 Working Days',
      credit: '15–30 Days'
    },
    {
      name: 'Safety Equipment',
      image: 'pantry/safe1.jpg',
      description: 'Industrial safety gear, PPE kits, helmets, gloves, masks and workplace protection essentials.',
      delivery: '2–3 Working Days',
      credit: '15–30 Days'
    },
    {
      name: 'Packaging Materials',
      image: 'pantry/pack1.jpg',
      description: 'Boxes, tapes, bubble wraps, stretch films and protective packaging solutions for businesses.',
      delivery: '2–3 Working Days',
      credit: '15–30 Days'
    },
    {
      name: 'Plastic Products',
      image: 'pantry/plastic1.jpg',
      description: 'Plastic bins, storage containers, crates, dustbins and multipurpose utility items.',
      delivery: '2–3 Working Days',
      credit: '15–30 Days'
    },
    {
      name: 'Glass Products',
      image: 'pantry/glass1.jpg',
      description: 'Glass bottles, jars, tumblers and pantry utility glassware for office and industrial use.',
      delivery: '2–3 Working Days',
      credit: '15–30 Days'
    }
  ];

  // WhatsApp enquiry
  contactService(service: any) {
    const text = `Hello, I am interested in your ${service.name}.`;
    const number = '+919307582455';
    const waUrl = `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  }

}