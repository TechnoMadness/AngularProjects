import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css'],
  animations: [
    trigger('fade', [
      
      transition('void => *',[
        style({ backgroundColor:'yellow' , opacity:0}),
        animate(2000, style({ backgroundColor:'white' , opacity:1}))
      ]),

      transition('* => void',[
        animate(2000, style({opacity:0}))
      ])
    ])
  ]
})
export class MissionsComponent {

}
