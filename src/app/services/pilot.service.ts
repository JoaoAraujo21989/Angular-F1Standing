import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Driver, DriverStandig} from '../../assets/F1DriverStandings'

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  constructor(private httClient: HttpClient) { }

  private requestUrl: string = '../../assets/DriverStandings.json'
  getPilot(): Observable<DriverStandig[]>{
    return this.httClient.get<DriverStandig[]>(this.requestUrl);
  }

  
}
