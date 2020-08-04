import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  config: any;
  fullpage_api: any;
  constructor() {  // for more details on config options please visit fullPage.js docs
    this.config = {

      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      // anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      // menu: '#menu',

      // fullpage callbacks
      afterResize: () => {
        console.log("After resize");
      },
      afterLoad: (origin, destination, direction) => {
        console.log(origin.index);
      }
    };
  }

  ngOnInit(): void {
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

}
