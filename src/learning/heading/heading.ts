import { Component, Input } from '@angular/core';
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
}

