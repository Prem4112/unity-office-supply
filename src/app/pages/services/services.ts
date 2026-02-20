import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-services',
  templateUrl: './services.html',
  styleUrls: ['./services.css'],
  standalone:true,
  imports:[IonicModule,CommonModule,FormsModule]
})
export class Services {
  constructor(private router:Router) {}

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

  contactService(service: any) {
    // WhatsApp enquiry link
    const text = `Hello, I am interested in your ${service.name}.`;
    const number = '+919307582455'; // company number
    const waUrl = `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  }
}
