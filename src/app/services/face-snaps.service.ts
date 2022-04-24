import { Injectable } from "@angular/core";
import { FaceSnap} from "../models/face-snap.model" 

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
          id:1,
          title:'Archibald',
          description:'Mon meilleur ami depuis tout petit !',
          imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          createdDate:new Date(),
          location: 'Paris',
          snaps:1
        },
        {
          id:2,
          title:'Oeufs de Pâques',
          description:'Nous avons décorés nos oeufs pour pâques !',
          imageUrl:'https://cdn.pixabay.com/photo/2021/03/30/08/06/easter-eggs-6136257_960_720.jpg',
          createdDate:new Date(),
          snaps:107
        },
        {
          id:3,
          title:'Petit Oiseau',
          description:'Photo prise ce matin représentant la beauté de la nature',
          imageUrl:'https://cdn.pixabay.com/photo/2022/04/12/09/03/bird-7127630_960_720.jpg',
          createdDate:new Date(),
          location: 'Argenton',
          snaps:58
        }
      ];

      getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
      }

      getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
          throw new Error ('FaceSnap not found')
        } else {
          return faceSnap;
        }
      } 

      snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
      }
    }

