import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  toggleMenu = () => {
    const links = document.querySelector('.links');
    links?.classList.toggle('hidden');
  }
}
