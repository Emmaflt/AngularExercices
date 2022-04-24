import { Component, OnInit, Input } from '@angular/core';
import {FaceSnap} from '../models/face-snap.model'
import {FaceSnapsService} from '../services/face-snaps.service'


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText! : string;

  constructor(private faceSnapsService: FaceSnapsService) {

  }

  ngOnInit() {
    this.buttonText = 'Jaime!';
  }

  onSnap() {
    if (this.buttonText === 'Jaime!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap'); 
      this.buttonText = 'Je naime pas !'
    }
    else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap'); 
      this.buttonText = 'Jaime!';
    }
  }

}
