import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MissionModel } from 'src/app/models/mission.model';
import { MissionsService } from 'src/app/services/missions.service';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        transform:'scale(1.5)'
      })),
      state('closed', style({
        transform:'scale(1)'
        
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
      transition('open <=> closed', [
        animate('0.5s')
      ]),
      transition ('* => open', [
        animate ('1s',
          style ({ opacity: '*' }),
        ),
      ]),
      transition('* => *', [
        animate('1s')
      ]),
    ]),
    trigger('ResizePage', [
      // ...
      state('open', style({
        width: '90%'
      })),
      state('closed', style({
        width: '70%'
        
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
      transition('open <=> closed', [
        animate('0.5s')
      ]),
      transition ('* => open', [
        animate ('1s',
          style ({ opacity: '*' }),
        ),
      ]),
      transition('* => *', [
        animate('1s')
      ]),
    ]),

    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class MissionsComponent implements OnInit{

  isOpen = false;
  isHidden=false;
  showCase!:MissionModel;

  toggle(item:MissionModel) {
    this.isOpen = !this.isOpen;
    this.isHidden= !this.isHidden;
    console.log(item);
    this.showCase=item;
  }

  goBack(showCase:MissionModel){
    this.isHidden= !this.isHidden;
    this.isOpen = !this.isOpen;
  }

  dataAll : MissionModel[]=[];
  constructor(private service: MissionsService) {}

  ngOnInit(): void {
      this.getMissions();
  }

  getMissions(){
  this.service.getAllMissions().subscribe({
    next:(res)=>{
      
      this.dataAll = res;
    },

    error: (err) => {
      console.log(err)
    }
  })
}
}
