import { Component, OnInit } from '@angular/core';
import { WeaponModel } from 'src/app/models/weapon.model';
import { ExpertiseService } from 'src/app/services/expertise.service';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent implements OnInit{

  dataAll : WeaponModel[]=[];
  constructor(private service: ExpertiseService) {}

  ngOnInit(): void {
      this.getWeapons();
  }

  getWeapons(){
  this.service.getAllWeapons().subscribe({
    next:(res)=>{
      
      this.dataAll = res;
    },

    error: (err) => {
      console.log(err)
    }
  })
}

}
