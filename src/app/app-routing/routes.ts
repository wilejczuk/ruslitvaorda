import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { HomeComponent } from '../home/home.component';
import { ExcerptComponent } from '../excerpt/excerpt.component';
import { ParticipantsComponent } from '../participants/participants.component';
import { PplDetailedComponent } from '../ppl-detailed/ppl-detailed.component';
import { PreviewComponent } from '../preview/preview.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'menu',  component: MenuComponent },
  { path: 'participants',  component: ParticipantsComponent },
  { path: 'excerpt/:id',  component: ExcerptComponent },
  { path: 'preview/:id',  component: PreviewComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
