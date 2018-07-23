import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  languages = ["English", "Spanish", "Polish"];
  model = new Employee('Jaś', 'Fasola', false, "w2", "Polish", null);
}
