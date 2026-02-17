import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services'; 
import { CategoryComponent } from './pages/category/category';

import { Contact } from './pages/contact/contact';
import { NavbarComponent } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';


export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'services', component: Services },
  { path: 'category/:type', component: CategoryComponent },
  { path: 'contact', component:  Contact },
  { path: 'navbar', component:  NavbarComponent  },
  { path: 'footer', component: Footer  }
];
