import { Component, OnInit, ViewChild } from '@angular/core';
import { People } from '../shared/people';
import { PeopleService } from '../services/people.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';



const ROLES : string[] =  ['Автор', 'Редактор', 'Рецензент', 'Дизайнер'];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  @ViewChild('fform') feedbackFormDirective;

  peoplz: People[];
  featuredMan: People;
  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;

  roles = ROLES;

  onSelect(man: People) {
    this.featuredMan = man;
    console.log(this.featuredMan);
  }

  constructor(private peopleService: PeopleService,
    public dialog: MatDialog,
    private fb: FormBuilder
  ) {
    this.createForm();
 }

  ngOnInit() {
    this.peoplz = this.peopleService.getPeople();
  }

  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }

  createForm() {
      this.feedbackForm = this.fb.group({
        firstname: ['', Validators.required ],
        lastname: ['', Validators.required ],
        telnum: ['', Validators.required ],
        email: ['', Validators.required ],
        agree: false,
        contacttype: 'None',
        message: ''
      });
    }

    onSubmit() {
      this.feedback = this.feedbackForm.value;
      console.log(this.feedback);
      this.feedbackForm.reset({
        firstname: '',
        lastname: '',
        telnum: '',
        email: '',
        agree: false,
        contacttype: 'None',
        message: ''
      });
      this.feedbackFormDirective.resetForm();
    }

}
