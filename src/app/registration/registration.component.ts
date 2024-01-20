import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PathComponent } from './path/path.component';
import { PricingComponent } from './pricing/pricing.component';
import { FormComponent } from './form/form.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [HeaderComponent,NavbarComponent,PathComponent,PricingComponent,FormComponent,NewsletterComponent,FooterComponent],
  template: `
    <div>
      <app-header></app-header>
      <app-navbar></app-navbar>
      <app-path></app-path>
      <app-pricing></app-pricing>
      <app-form></app-form>
      <app-newsletter></app-newsletter>
      <app-footer></app-footer>
      </div>
  `,
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

}
