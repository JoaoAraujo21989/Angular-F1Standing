import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Driver, DriverStandig } from '../../../assets/F1DriverStandings';
import { PilotService } from '../../services/pilot.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: number = 0;
  pilot: DriverStandig = {} as DriverStandig;

  constructor(private activatedRoute: ActivatedRoute, private pilotService: PilotService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params=>{
        this.id = params['id'];
      }
    );

    this.pilotService.getPilot().subscribe(response =>{
      this.pilot = response.filter(x => x.Driver.permanentNumber == this.id)[0];
    })
  }

}
