import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import { IMenuItem } from './header.interface';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, RouterModule, NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  menuItems: IMenuItem[] = [
    {
      path: "/",
      icon: "home"
    },
    {
      path: "/sale",
      icon: "percent"
    }, 
    {
      path: "/favorites",
      icon: "favorite"
    }, 
    {
      path: "/profile",
      icon: "person"
    }, 
  ]

}
