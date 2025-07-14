import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router'; // ✅ this line is important

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink], // ✅ Add RouterLink here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}