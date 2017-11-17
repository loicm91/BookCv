import { Component, OnInit, Input } from '@angular/core';
import { Router }            from '@angular/router';

import { Photo }                from '../photo';
import { PhotoService }         from '../photo.service';
import { EmitterService }       from '../emitter.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [PhotoService],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  results: any[];
  render: any[];
	array = [];
	sum = 12;
  scrollDistance = 2;	
  selectedImage;
  
     constructor(private photoService: PhotoService,
      private router: Router){
       
      

    }
    @Input() photo: Photo;
    ngOnInit(): void {
      // Make the HTTP request:
     this.getPhoto();
      console.log('GetPost');
      
    }

setSelectedImage(result){
  this.selectedImage= result;	
}

getPhoto(){
  this.photoService.getPosts().subscribe(data => {
    // Read the result field from the JSON response.
    this.results = data;
    
      for (let i = 0; i < this.sum; ++i) {
        this.array.push(this.results[i]);
      }
    console.log('toto', this.results);
  });
}

navigate(direction){
  var index = this.results.indexOf(this.selectedImage)+(direction ? 1: -1);
  if(index >= 0 && index < this.results.length){
    this.selectedImage = this.results[index];	
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
    this.array.push(this.results[i]);
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
