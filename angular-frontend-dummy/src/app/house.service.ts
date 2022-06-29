import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { House } from './house';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  baseURL = "http://localhost:8080/api/houses";
  constructor(private httpClient: HttpClient) { }

  getAllHouse(): Observable<House[]>{
    return this.httpClient.get<House[]>(`${this.baseURL}`);
  }

  //add a house
  //"http://localhost:8080/api/houses"
  addHouse(house?: House): Observable<Object>{
    return this.httpClient.post<Object>(`${this.baseURL}`,house);
  }

 /* addHouse(houseImage: File, houseName: string, houseAddress: string, houseRent: number, houseContactno: string, houseType: string, houseDescription: string): Observable<any>{
    return this.httpClient.post(
      this.baseURL,
      {
        houseImage,
        houseName,
        houseAddress,
        houseRent,
        houseContactno,
        houseType,
        houseDescription
      },
      httpOptions
    );
  }*/

}
