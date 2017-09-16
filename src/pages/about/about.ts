import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { Platform } from 'ionic-angular';

declare let WifiWizard: any;
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild('lineCanvas') lineCanvas;
  lineChart: any;
  constructor(public navCtrl: NavController, public platform: Platform) {
    // this.getWifiList();
    this.startScan();
  }
  // test={"name":"binchen"};

  // output = this.test;
  public output: string = "test";
  public wifiList;
  // public currentSSID;
  convertFrequency(freq: number) {
    let channel: number
    switch (freq) {
      case 2412: {
        channel = 1
        break;
      }
      case 2417: {
        channel = 2
        break;
      }
      case 2422: {
        channel = 3
        break;
      }
      case 2427: {
        channel = 4
        break;
      }
      case 2432: {
        channel = 5
        break;
      }
      case 2437: {
        channel = 6
        break;
      }
      case 2442: {
        channel = 7
        break;
      }
      case 2447: {
        channel = 8
        break;
      }
      case 2452: {
        channel = 9
        break;
      }
      case 2457: {
        channel = 10
        break;
      }
      case 2462: {
        channel = 11
        break;
      }
      case 2467: {
        channel = 12
        break;
      }
      case 2472: {
        channel = 13
        break;
      }
      case 5180: {
        channel = 36
        break;
      }
      case 5200: {
        channel = 40
        break;
      }
      case 5220: {
        channel = 44
        break;
      }
      case 5240: {
        channel = 48
        break;
      }
      case 5260: {
        channel = 52
        break;
      }
      case 5280: {
        channel = 56
        break;
      }
      case 5300: {
        channel = 60
        break;
      }
      case 5320: {
        channel = 64
        break;
      }
      case 5500: {
        channel = 100
        break;
      }
      case 5520: {
        channel = 104
        break;
      }
      case 5540: {
        channel = 108
        break;
      }
      case 5560: {
        channel = 112
        break;
      }
      case 5580: {
        channel = 116
        break;
      }
      case 5600: {
        channel = 120
        break;
      }
      case 5620: {
        channel = 124
        break;
      }
      case 5640: {
        channel = 128
        break;
      }
      case 5660: {
        channel = 132
        break;
      }
      case 5680: {
        channel = 136
        break;
      }
      case 5700: {
        channel = 140
        break;
      }
      case 5745: {
        channel = 149
        break;
      }
      case 5765: {
        channel = 153
        break;
      }
      case 5785: {
        channel = 157
        break;
      }
      case 5805: {
        channel = 161
        break;
      }
      case 5825: {
        channel = 165
        break;
      }
      default: {
        channel = 0
        break;
      }
    }
    return channel
  }

  // ionViewDidLoad() {
  //   this.lineChart = new Chart(this.lineCanvas.nativeElement, {

  //     type: 'line',
  //     data: {
  //       labels: ["January", "February", "March", "April", "May", "June", "July"],
  //       datasets: [
  //         {
  //           label: "My First dataset",
  //           fill: false,
  //           lineTension: 0.1,
  //           backgroundColor: "rgba(75,192,192,0.4)",
  //           borderColor: "rgba(75,192,192,1)",
  //           borderCapStyle: 'butt',
  //           borderDash: [],
  //           borderDashOffset: 0.0,
  //           borderJoinStyle: 'miter',
  //           pointBorderColor: "rgba(75,192,192,1)",
  //           pointBackgroundColor: "#fff",
  //           pointBorderWidth: 1,
  //           pointHoverRadius: 5,
  //           pointHoverBackgroundColor: "rgba(75,192,192,1)",
  //           pointHoverBorderColor: "rgba(220,220,220,1)",
  //           pointHoverBorderWidth: 2,
  //           pointRadius: 1,
  //           pointHitRadius: 10,
  //           data: [65, 59, 80, 81, 56, 55, 40],
  //           spanGaps: false,
  //         }
  //       ]
  //     }

  //   });
  // }

  getWifiList() {
    var self = this;
    this.platform.ready().then(() => {
      function listHandler(a) {
        // alert(a);
        console.log(a)

        self.output = JSON.stringify(a);
      }
      function fail(e) {
        console.log("Failed" + e);
      }

      // cordova.plugins.WifiWizard.isWifiEnabled(this.success, this.err);
      WifiWizard.listNetworks(listHandler, fail);

    });
  }

  getCurrentSSID = () => {
    var self = this;
    this.platform.ready().then(() => {
      function ssidHandler(s) {
        console.log("Current SSID" + s);
        // this.output = s
        self.output = JSON.stringify(s);
        // self.currentSSID = s
        this.startScan();
      }
      function fail(e) {
        console.log("Failed" + e);
        this.startScan();
      }

      WifiWizard.getCurrentSSID(ssidHandler, fail);
    });
  }

  getScanResult() {
    var self = this;
    this.platform.ready().then(() => {
      function listHandler2(a) {
        // alert(JSON.stringify(a));
        console.log(a)
        self.output = JSON.stringify(a);
      }
      function fail(e) {
        console.log("Failed" + e);
      }

      WifiWizard.getScanResults({ numLevels: 5 }, listHandler2, fail);

    });
  }

  getstartScan() {
    var self = this;
    this.platform.ready().then(() => {
      function listHandler2(a) {
        // alert(JSON.stringify(a));
        console.log(a)

        self.output = JSON.stringify(a);
      }
      function fail(e) {
        console.log("Failed" + e);
      }

      WifiWizard.startScan(listHandler2, fail);

    });
  }

  startScan() {
    console.log('call startScan')
    var self = this;
    let currentSSID
    if (typeof WifiWizard !== 'undefined') {
      console.log("WifiWizard loaded: ");
      console.log(WifiWizard);
    } else {
      console.warn('WifiWizard not loaded.');
    }

    let successGetCurrent = (e: any) => {
      currentSSID = e.replace('"', '').replace('"', '')
      WifiWizard.startScan(successNetwork, failNetwork);
    }

    let successNetwork = (e: any) => {
      WifiWizard.getScanResults({ numLevels: 5 }, listHandler, failNetwork);
    }

    let failNetwork = (e: any) => {
      console.log("" + e);
    }
    let failGetCurrent = (e: any) => {
      WifiWizard.startScan(successNetwork, failNetwork);
    }

    let listHandler = (a: any) => {
      let networks = [];
      for (let x in a) {
        // console.log(a[x].SSID + ", " + a[x].BSSID + ", " + a[x].level);

        // let network = new Map()
        let network = {
          ssid: a[x].SSID,
          bssid: a[x].BSSID,
          level: a[x].level,
          frequency: a[x].frequency,
          channel: this.convertFrequency(a[x].frequency),
          signal: a[x].level <= 0 ? -100 : a[x].level >= 100 ? -50 : (a[x].level / 2) - 100,
          style: {}

        }
        if (currentSSID == network.ssid) {
          // let test = this.simpleClone(network)
          // test.style = { background: '#eaeef3' }
          network["style"] = { background: '#eaeef3' }
          networks.unshift(network);
        } else

          networks.push(network);
        // networks.push(network);



      }
      console.log(a)

      self.output = JSON.stringify(networks);
      self.wifiList = networks;
    }
    // WifiWizard.startScan(successNetwork, failNetwork);
    WifiWizard.getCurrentSSID(successGetCurrent, failGetCurrent);
  }

  simpleClone(obj: any) {
    return Object.assign({}, obj);
  }

}
