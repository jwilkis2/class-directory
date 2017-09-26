import { Component, Input, OnInit } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() person: Person;

  constructor() { }

  getEmail(): boolean {
    this.person.getEmail();
    return false;
  }

  getName(): boolean {
    this.person.getName();
    return false;
  }

  ngOnInit() {
  }

}
