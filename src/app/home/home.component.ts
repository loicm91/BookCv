import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [];
	array = [];
	sum = 12;
  scrollDistance = 2;	
  selectedImage;
  
     constructor(){
        this.images = [
        '../../assets/image/JMF-Valentine/IMG_7946.jpg',
        '../../assets/image/AB-Loane/_Y5A9270.jpg',
        '../../assets/image/CB-Chinatown/2-web.jpg',
        '../../assets/image/AB-Anna/13.jpg',
        '../../assets/image/JP-Voodoo/EDITO VOODOO8465348.jpg',
        '../../assets/image/Apprecial/4.jpg',
        '../../assets/image/EC-MaximeD/CLOTIS_8287.JPG',
        '../../assets/image/MS-Cite/1E7A2018.jpg',
        '../../assets/image/YJ-Jouvanceau/1.jpg',
        '../../assets/image/Mobiendo/1.jpg',
        '../../assets/image/AB-Dasha/_Y5A7970_retouch_Mads Bjerre Henriksen.jpg',
        '../../assets/image/JMF-Valentine/IMG_7946.jpg',
        '../../assets/image/AB-Loane/_Y5A9270.jpg',
        '../../assets/image/CB-Chinatown/2-web.jpg',
        '../../assets/image/AB-Anna/13.jpg',
        '../../assets/image/JP-Voodoo/EDITO VOODOO8465348.jpg',
        '../../assets/image/Apprecial/4.jpg',
        '../../assets/image/EC-MaximeD/CLOTIS_8287.JPG',
        '../../assets/image/MS-Cite/1E7A2018.jpg',
        '../../assets/image/YJ-Jouvanceau/1.jpg',
        '../../assets/image/Mobiendo/1.jpg',
        '../../assets/image/AB-Dasha/_Y5A7970_retouch_Mads Bjerre Henriksen.jpg'
      ] 
    
      for (let i = 0; i < this.sum; ++i) {
        this.array.push(this.images[i]);
      }
      

    }

  ngOnInit() {
   
  }

setSelectedImage(image){
  this.selectedImage= image;	
}


navigate(direction){
  var index = this.images.indexOf(this.selectedImage)+(direction ? 1: -1);
  if(index >= 0 && index < this.images.length){
    this.selectedImage = this.images[index];	
  }
}
//Pour que ça boucle à l'infini :
// addItems(startIndex, endIndex) {
//   for (let i = 0; i < this.sum; ++i) {
//     this.array.push(this.images[i]);
//   }
// }
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

  // pictures = [
  //   {url: '../../assets/image/JMF-Valentine/IMG_7946.jpg'},
  //   {url: '../../assets/image/AB-Loane/_Y5A9270.jpg'},
  //   {url: '../../assets/image/CB-Chinatown/2-web.jpg'},
  //   {url: '../../assets/image/AB-Anna/13.jpg'},
  //   {url: '../../assets/image/JP-Voodoo/EDITO VOODOO8465348.jpg'},
  //   {url: '../../assets/image/Apprecial/4.jpg'},
  //   {url: '../../assets/image/EC-MaximeD/CLOTIS_8287.JPG'},
  //   {url: '../../assets/image/MS-Cite/1E7A2018.jpg'},
  //   {url: '../../assets/image/YJ-Jouvanceau/1.jpg'},
  //   {url: '../../assets/image/Mobiendo/1.jpg'},
  //   {url: '../../assets/image/AB-Dasha/_Y5A7970_retouch_Mads Bjerre Henriksen.jpg'}
  // ]
}