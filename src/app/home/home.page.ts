import { Component } from '@angular/core';
import { Plugins } from  '@capacitor/core';
import { Magnetometer, MagnetometerReading } from '@ionic-native/Magnetometer/ngx';
// import { Dialogs } from '@ionic-native/dialogs/ngx';

// https://ionicframework.com/docs/native/magnetometer
// https://ionicframework.com/docs/native/dialogs

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  // magnetometer: Magnetometer; // alternatief op de constructor, maar object blijft helaas wel leeg.
  // dialogs: Dialogs;

  testVar = 'test leeg'; // voor testen om te zien wat wel werkt ook in android

  // *** volgens de documentatie moet de magnetometer in de constructor staan als parameter, maar dat werkt niet

  // constructor() {};  //

  constructor(private magnetometer: Magnetometer) {}

  // ZO MOET het volgens de documentatie, maar object blijft leeg en in de browser krijg je direct NullInjectorError
  // constructor(private dialogs: Dialogs) {}

// Uit de testjes hieronder blijkt dat de magnetometer niet bestaat als object

async getCurrent2() {
  const magnetoMeter2 = await Plugins.Magnetometer.get();
  if (Object.keys(magnetoMeter2).length === 0) {
    this.testVar = 'magnetoMeter via plugins ook leeg';
  } else {
    this.testVar = 'magnetoMeter via plugins NIET leeg';
  }
}

getCurrent(){
    // Get the device current compass heading
  this.testVar = 'get Current aangeroepen 1a';
  if ( this.magnetometer) { // bestaat het object?
    this.testVar = 'get Current aangeroepen 1b, object magnetometer bestaat';
  } else {
    this.testVar = 'get Current aangeroepen magnetometer does not exists';
  }

  this.magnetometer.getReading().then(
      (data: MagnetometerReading) => console.log(data), // dit stuk levert niets op
      (error: any) => console.log(error) // console leeg

     // Error die dit oplevert: core.js:6210 ERROR TypeError: Cannot read property 'getReading' of undefined

    );
    this.testVar = 'get Current aangeroepen 2';
  }

  changeTestText() { // kijken of de varibele en de knoppen werken
    if (this.testVar==='test tekst 2' ) {
      this.testVar = 'test tekst 1';
    } else {
      this.testVar = 'test tekst 2';
    }
  }
}
