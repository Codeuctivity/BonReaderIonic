// https://ionicframework.com/docs/native/qr-scanner/

import { Component } from '@angular/core';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    console.log('start application1');
    // this.qrScanner.prepare(); // show the prompt
    console.log('done application');
  }
  startScan() {
    console.log('start scan');
  }
  share() {
    console.log('start share');
  }
}

