import { Component } from '@angular/core';
import { DictionaryService } from './DictionaryService';
import { Person } from './person/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dictionary;
  email: string;
  persons: Person[];

  constructor(private _DictionaryService: DictionaryService) {
    // console.log(_DictionaryService.getDirectory());

    this.persons = [];

    this._DictionaryService.getDirectory()
      .subscribe(
        (dict) => {
          this.dictionary = dict;
          // console.log('after reading');
          // console.log(dict);
          // console.log(dict["Jonathan Wilkison"]);
          Object.keys(dict).forEach((key) => {
            // console.log(key + ' - ' + dict[key]);
            this.persons.push(new Person(key, dict[key]));
          });

        }
      );
    // console.log(this.persons);
  }

  searchDictionary(search: HTMLInputElement): boolean {
    let notFound = 1;
    console.log(`Looking up name: ${search.value}`);
    this.persons.forEach((element) => {
      if (element.getName() === search.value) {
        this.email = element.getEmail();
        notFound = 0;
        search.value = '';
      }
    });
    if (notFound) {
      this.email = 'No matches found. Please try again.';
      search.value = '';
    }
    return false;
  }

  sortedPersons(): Person[] {
    return this.persons.sort((a: Person, b: Person) => {
      if(a.name < b.name) {return -1;}
      if(a.name > b.name) {return 1;}
      return 0;
    });
  }
 }
