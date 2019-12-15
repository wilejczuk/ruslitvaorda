import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { HomeComponent } from '../home/home.component';
import { ExcerptComponent } from '../excerpt/excerpt.component';
import { PplDetailedComponent } from '../ppl-detailed/ppl-detailed.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'menu',  component: MenuComponent },
  { path: 'excerpt/:id',  component: ExcerptComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
