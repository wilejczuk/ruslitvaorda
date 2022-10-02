import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { NumistaService } from '../services/numista.service';

import { Book } from '../shared/book';
import { BookService } from '../services/book.service';
import { People } from '../shared/people';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  featBook: Book;
  coverPath: string;
  pagesPath: string;
  showPreview: boolean;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  randomCoin = {};
  randomCoinDet = 0;
  randomCoinIssuer = "";

  constructor(  private bookservice: BookService,
    private peopleservice: PeopleService,
    private route: ActivatedRoute,
    private numistaService: NumistaService
) { }

  ngOnInit() {

    const reqN = this.numistaService.getHP();
    reqN.subscribe(
      (response) => {
        console.log(response);
        this.randomCoin = response["types"][Math.floor(Math.random() * 50)]; //Should be response.count, put there are 50 items per page
        this.randomCoinIssuer = this.randomCoin["issuer"]["name"];
        const reqDetails = this.numistaService.getParticular(this.randomCoin["id"]);
        // запрашиваем больше деталей о конкретном экземпляре
        reqDetails.subscribe(
          (response) => {
            this.randomCoinDet = response["references"][0]["number"];
            console.log(this.randomCoinDet);
          },
          (error) => { console.log(error); });
      },
      (error) => { console.log(error); });

    var id = this.route.snapshot.params['id'];

    this.featBook = this.bookservice.getBook(id);
    this.showPreview = this.featBook.pdf==null;
    this.coverPath = "/assets/images/books/"+id+"/cover.jpg";
    this.pagesPath = "/assets/images/books/"+id;

    this.galleryOptions =
     [

      { "previewCloseOnClick": true, "previewCloseOnEsc": true, "image": false, "height": "100px"  },
      { "breakpoint": 500, "width": "300px", "height": "300px", "thumbnailsColumns": 3 },
      { "breakpoint": 300, "width": "100%", "height": "200px", "thumbnailsColumns": 2 }
      ];


        this.galleryImages = [];

        for (let i = 1; i < 9; i++) {
          this.galleryImages.push ({
              small: this.pagesPath+"/pages/"+i+".jpg",
              medium: this.pagesPath+"/pages/"+i+".jpg",
              big: this.pagesPath+"/pages/"+i+".jpg"
          });
}



  }

}
