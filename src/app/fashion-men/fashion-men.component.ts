import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fashion-men',
  templateUrl: './fashion-men.component.html',
  styleUrls: ['./fashion-men.component.css']
})
export class FashionMenComponent implements OnInit {

  images = [];
	array = [];
	sum = 12;
  scrollDistance = 2;	
  selectedImage;
  
     constructor(){
        this.images = [
          '../../assets/image/EC-MaximeD/CLOTIS_8287.JPG'
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

