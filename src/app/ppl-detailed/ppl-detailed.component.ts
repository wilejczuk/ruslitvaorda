import { Component, OnInit, Input } from '@angular/core';
import { People } from '../shared/people';
import { Publication } from '../shared/publication';
import { PUBLICATION } from '../shared/articles';

@Component({
  selector: 'app-ppl-detailed',
  templateUrl: './ppl-detailed.component.html',
  styleUrls: ['./ppl-detailed.component.scss']
})
export class PplDetailedComponent implements OnInit {

  @Input()
  people: People;

  articles: Publication[] = PUBLICATION;


  constructor() { }

  ngOnInit() {
  }

}
