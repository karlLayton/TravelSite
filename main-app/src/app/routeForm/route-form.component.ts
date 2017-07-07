import { Component, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { states, Address, Trip } from './data-model';
@Component({
  selector: 'route-form',
  templateUrl: './route-form.component.html',
  styleUrls: [
  './route-form.component.css']
})
export class RouteFormComponent {
   @Input() trip: Trip;

   startingAddressForm: FormGroup;
   states = states;


   constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }

   createForm() {
      this.startingAddressForm = this.fb.group({
         address: this.fb.array([new Address('', '', states[0], 0, 0, '')]),
      });
   }

   setAddresses(addresses: Address[]) {
     const addressFGs = addresses.map(address => this.fb.group(address));
     const addressFormArray = this.fb.array(addressFGs);
     this.startingAddressForm.setControl('addresses', addressFormArray);
   }
   OnChanges() {
      this.startingAddressForm.reset({
        address: this.trip.addresses || new Address('', '', states[0], 0, 0, ''), // Add the users detail in the future.
        });
   }

  // **** * * * * * * * * * * *  * * Template Based Form * * * * * ** * * * * * * * * * * * *

  //  submitted = false;

  // onSubmit() { this.submitted = true; }
  // model =  new Address('2112 Main St.', 'Grand Rapids', this.states[48], 86753, 1234,'apt. 309');
  // newAddress() {
  //    this.model = new Address('', '', '', 0, 0, '');
  // }


    // get diagnostic() { return JSON.stringify(this.model); } // <-----For Testing.
}

