import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
  standalone: true
})
export class About implements OnInit {

  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit(): void {
    // Set Page Title
    this.titleService.setTitle('About Us - Unity Office Supply');

    // Set Meta Tags
    this.meta.updateTag({ name: 'description', content: 'Learn more about Unity Office Supply, India’s trusted provider of office supplies and corporate solutions.' });
    this.meta.updateTag({ name: 'keywords', content: 'Unity Office Supply, About, office solutions, office supplies India' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    // Set Canonical URL
    let link: HTMLLinkElement = document.querySelector("link[rel='canonical']") || document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', 'https://unityofficesupply.com/about');
    document.head.appendChild(link);
  }
}