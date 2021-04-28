import { Component } from '@angular/core';
import { Plugins } from  '@capacitor/core';
import { Magnetometer, MagnetometerReading } from '@ionic-native/Magnetometer/ngx';
// import { Dialogs } from '@ionic-native/dialogs/ngx';

// https://ionicframework.com/docs/native/magnetometer


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  // magnetometer: Magnetometer; // alternative to construct?

  testVar = 'test empty'; //  test to see if it works in emulator android

  constructor(private magnetometer: Magnetometer) {}


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
    this.testVar = 'GET current: object magnetometer exsist';
  } else {
    this.testVar = 'GET current: magnetometer does NOT exists';
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
