import { Component, OnInit } from '@angular/core';
import { House } from '../house';
import { HouseService } from '../house.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {

  house?: House[];

  constructor(private houseService: HouseService) { }

  ngOnInit(): void {

  /*  this.house = [
      {
        houseId: 1,
        houseName: "Rensi Vila 2",
        houseAddress: "Near Gurudwara, Ahmedabad",
        houseRent: 5999,
        houseContactno: "9876543213",
        houseType: "Bungalow",
        houseDescription: "Only for family",
      },
    ];*/

    this.getAllHouses();

  }
  getAllHouses(){
    this.houseService.getAllHouse().subscribe(data=>{
      this.house = data;
    });
  }

}
