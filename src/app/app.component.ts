import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './components/ui/layout/layout.component';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LayoutComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app';
}
