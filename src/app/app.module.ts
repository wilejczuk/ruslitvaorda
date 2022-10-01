import { NgModule } from '@angular/core';
import { enableProdMode } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { PplDetailedComponent } from './ppl-detailed/ppl-detailed.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExcerptComponent } from './excerpt/excerpt.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { JwSocialButtonsModule } from 'jw-angular-social-buttons';

import { PeopleService } from './services/people.service';
import { PublicationService } from './services/publication.service';
import { BookService } from './services/book.service';

import { ParticipantsComponent } from './participants/participants.component';
import { PreviewComponent } from './preview/preview.component';

import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PplDetailedComponent,
    HeaderComponent,
    FooterComponent,
    ExcerptComponent,
    HomeComponent,
    LoginComponent,
    ParticipantsComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatSliderModule,
    MatButtonModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatSortModule,
    NgxHmCarouselModule,
    JwSocialButtonsModule,
    NgxGalleryModule,
    HttpClientModule
  ],
  entryComponents: [
        LoginComponent
  ],
  providers: [PeopleService, PublicationService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
