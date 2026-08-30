import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../shared/components/models/user.model';

@Component({
  selector: 'app-heading',
  imports: [],
  templateUrl: './heading.html',
  styleUrl: './heading.css',
})
export class Heading {
@Input() name = '';

 @Input() user !:User;

 @Output() success : EventEmitter<User> =new EventEmitter();

 @Output() failure: EventEmitter<{error: String}>=  new EventEmitter();

 onSubmit(){
  if(this.user) this.user.Name="chandru";
  this.success.emit(this.user)
 }
}

