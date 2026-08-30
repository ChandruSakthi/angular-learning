import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from "../shared/components/side-bar/side-bar";
import{FormsModule} from "@angular/forms"
import { Heading } from '../learning/heading/heading';
import { User } from '../shared/components/models/user.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBar,FormsModule, Heading],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'app';
  myname = "chandru sakthivel";
  user : User={
    Name: "Surya",
    Age: 25,
    Gender : "Male"
  }
  onSuccess($e:User){
    console.log($e)
    this.user=$e;

  }

  onFailure($e:{error:String}){
    console.log($e)
  }
}
