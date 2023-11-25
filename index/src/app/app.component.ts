import { Component } from '@angular/core';
import { RouterOutlet, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HomeComponent],
  template: `
    <main>
      <header>
      </header>
      <nav>
    <ul>
      <li><a routerLink="/home">Home</a></li>
      <li><a routerLink="/about">About</a></li>
      <li><a routerLink="/login">Login</a></li>
    <!-- Add more navigation links here -->
    </ul>
    </nav>
      <section>
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homes';
}
