import { Component, OnInit } from '@angular/core';
import { VgAPI } from 'videogular2/core';

export interface IMedia {
  title: string;
  src: string;
  type: string;
}

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],

})

export class VideoComponent implements OnInit {

  playlist: Array<IMedia> = [
    {
        title: 'Summer Twins',
        src: '../../assets/video/jonadb-summertwins.mp4',
        type: 'video'
    },
    {
        title: 'Voodoo Kids',
        src: '../../assets/video/vodoo-kids.mp4',
        type: 'video'
    },
    {
        title: 'Lacryma Christi',
        src: '../../assets/video/lacryma-christi.mp4',
        type: 'video'
    }
];
  
currentIndex = 0;
currentItem: IMedia = this.playlist[ this.currentIndex ];
api: VgAPI;

  constructor(){ }

  ngOnInit() {
  }
  onPlayerReady(api: VgAPI) {
    this.api = api;

    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
    this.api.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
}

nextVideo() {
    this.currentIndex++;

    if (this.currentIndex === this.playlist.length) {
        this.currentIndex = 0;
    }

    this.currentItem = this.playlist[ this.currentIndex ];
}

playVideo() {
    this.api.play();
}

onClickPlaylistItem(item: IMedia, index: number) {
    this.currentIndex = index;
    this.currentItem = item;
}
 
}
