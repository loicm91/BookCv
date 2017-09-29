import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit {

  images = [];
	array = [];
	sum = 12;
  scrollDistance = 2;	
  selectedImage;
  
     constructor(){
        this.images = [
          '../../assets/image/YJ-Jouvanceau/1.jpg',
          '../../assets/image/AxelMarens/2.jpg',
          '../../assets/image/Apprecial/4.jpg',  
          '../../assets/image/Mobiendo/2.jpg'
        ]
        for (let i = 0; i < this.sum; ++i) {
          this.array.push(this.images[i]);
        }
      }

  ngOnInit() {
  }
  addItems(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; ++i) {
      this.array.push(this.images[i]);
    }
  }
  onScrollDown () {
    console.log('scrolled down!!')
    const start = this.sum;
    this.sum += 2;
    this.addItems(start, this.sum);
  }
  
  onScrollUp () {
    console.log('scrolled up!!')
  }
  
}
