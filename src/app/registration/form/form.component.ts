import { compileClassDebugInfo } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'

})


export class FormComponent implements OnInit, OnDestroy {
formPincode: any;
  constructor(){}
  
  ngOnInit(): void {
    console.log('Component initlized');
    fetch('https://api.sfoly.com/countries')
      .then(response => response.json())
      .then(data =>{
        const countrySelect = document.getElementById('country');
        data.forEach((country: string) => {
          const option = document.createElement('option');
          option.text = country;

          countrySelect?.appendChild(option);
        });
      })
      .catch(error =>console.error('Error fetching data:', error));
  }
  ngOnDestroy(): void {
    console.log('Component destroyed');
  }

 pincode:string = '';
 city:string = '';
 state:string ='';

  setPincode(code:string){
    this.pincode = code;
    fetch(`https://api.sfoly.com/getPincodeDetails?pincode=${this.pincode}`)
    .then(response => response.json())
    .then(data =>{
      this.city = data[0].City;
      this.state = data[0].State;
      document.getElementById('city')?.setAttribute("value",this.city);
      document.getElementById('state')?.setAttribute("value",this.state);
      console.log(data);
      console.log("city: " + this.city)
      console.log("state: " + this.state)
    })
    .catch(error => console.log("error: " + error));
  }
}