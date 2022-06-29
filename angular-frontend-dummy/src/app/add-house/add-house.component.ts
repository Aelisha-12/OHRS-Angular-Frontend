import { Component, OnInit } from '@angular/core';
import { House } from '../house';
import { HouseService } from '../house.service';

@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.css']
})
export class AddHouseComponent implements OnInit {

  form: any = {
    houseImage: null,
    houseName: null,
    houseAddress: null,
    houseRent: null,
    houseContactno: null,
    houseType: null,
    houseDescription: null
  };

  house: House = new House();
  constructor(private houseService: HouseService) { }

  ngOnInit(): void {
  }

  /*onSubmit(): void {
    const { houseImage, houseName, houseAddress, houseRent, houseContactno, houseType, houseDescription} = this.form;
    this.houseService.addHouse(houseImage, houseName, houseAddress,houseRent, houseContactno, houseType, houseDescription).subscribe({
      next: data => {
        console.log(data);
      }
    })
  }*/

  addHouse(){
    console.log(this.house);
    this.houseService.addHouse().subscribe();
  }

}
