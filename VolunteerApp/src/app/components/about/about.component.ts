import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  options: any;
  fullpage_api: any;
  innerWidth: any;
  innerHeight: any;
  DownloadImagePath: String;
  DownloadImageSize: number;
  LogoImageSize: number;



  constructor() {

    this.options = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      navigation: true,

      afterResize: () => {
        console.log("After resize");
      },
      afterLoad: (origin, destination, direction) => {
        console.log(origin.index);
      }
    };
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    if (this.innerWidth >= 1100) {
      this.DownloadImagePath = "../../../assets/images/downloadLarge.png";
      this.DownloadImageSize = this.innerWidth / 2.5;
      this.LogoImageSize = this.innerWidth / 2.5;
    }
    else {
      if (this.innerWidth < 1100) {
        this.DownloadImagePath = "../../../assets/images/downloadSmall.png";
        this.DownloadImageSize = this.innerWidth / 2;
        this.LogoImageSize = this.innerWidth / 1.5;

      }

    }

  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

}
