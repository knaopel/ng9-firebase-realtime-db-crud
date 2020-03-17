import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 9 Firebase Realtime Database CRUD';
  description = 'Angular-Fire-Demo';

  nameValue = '';
  descriptionValue = '';
  todos: Observable<Todo[]>;

  constructor(public db:AngularFireDatabase){
    this.todos = db.list<Todo>('todos').valueChanges();
  }

  onSubmit(){
    this.db.list('todos').push({name:this.nameValue,description:this.descriptionValue});
    this.nameValue = '';
    this.descriptionValue = '';
  }
}
