import { Component } from '@angular/core';
import { Plugins } from  '@capacitor/core';
import { Magnetometer, MagnetometerReading } from '@ionic-native/Magnetometer/ngx';

// https://ionicframework.com/docs/native/magnetometer


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  // magnetometer: Magnetometer; // alternative to construct?

  testVar = 'test empty'; //  test to see if it works in emulator android

  constructor(private magnetometer: Magnetometer) {} // this seems to be the probem, empty object


async getCurrent2() { // not working..
  const magnetoMeter2 = await Plugins.Magnetometer.get();
  if (Object.keys(magnetoMeter2).length === 0) {
    this.testVar = 'magnetoMeter via plugins empty';
  } else {
    this.testVar = 'magnetoMeter via plugins not empty';
  }
}

getCurrent(){ // not working because of empty object magnetometer
    // Get the device current compass heading
  this.testVar = 'get Current called';
  if ( this.magnetometer) { // bestaat het object?
    this.testVar += ': object magnetometer exists';
  } else {
    this.testVar += ': magnetometer does NOT exists';
  }

  this.magnetometer.getReading().then(
      (data: MagnetometerReading) => console.log(data), // not working
      (error: any) => console.log(error) // console shows no error

     // Error: core.js:6210 ERROR TypeError: Cannot read property 'getReading' of undefined

    );
    this.testVar = 'get Current aangeroepen 2';
  }

  changeTestText() { // to test if rest is working at all proper
    if (this.testVar==='test text 2' ) {
      this.testVar = 'test text 1';
    } else {
      this.testVar = 'test text 2';
    }
  }
}
