import { Component, OnInit } from '@angular/core';
// import { NavService } from '../nav-service.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
  // providers:[NavService]
})
export class IntroComponent implements OnInit {

  // constructor(private navService: NavService) { }
  constructor() { }

  ngOnInit() {
    this.loadScript('assets/js/Projector.js');
    this.loadScript('assets/js/CanvasRenderer.js');
    this.loadScript('assets/js/stats.min.js');
    this.loadScript('assets/js/Bird.js');
    this.loadScript('assets/js/birds2.js');
    // console.log(this.navService.getNav());
  }

  public loadScript(url) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
 }
}
