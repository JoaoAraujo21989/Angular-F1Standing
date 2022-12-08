import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Driver, DriverStandig } from '../../../assets/F1DriverStandings';
import { PilotService } from '../../services/pilot.service';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.css']
})
export class PilotsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  pilotList: DriverStandig[] = {} as DriverStandig[];
  dataSource = new MatTableDataSource<DriverStandig>;
  displayedColumns = ['permanentNumberDriver',
    'nationalityDriver',
    'givenNameDriver',
    'familyNameDriver',
    'nameConstructors',
    'pointsElement',
    'actions'];
  



  constructor(private pilotService: PilotService, private router: Router) { }

  ngOnInit(): void {
    this.pilotService.getPilot().subscribe((response) => {
      this.pilotList = response;
      this.dataSource = new MatTableDataSource<DriverStandig>(this.pilotList);

      this.dataSource.filterPredicate = function (data: DriverStandig, filter: string) {
        return data.Driver.givenName.toLowerCase().includes(filter);
      }

      this.dataSource.paginator = this.paginator;

    });


  }

  deleteRow(driver: DriverStandig) {
    let index = this.dataSource.data.indexOf(driver);
    this.dataSource.data.splice(index, 1);
    this.dataSource._updateChangeSubscription();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDetails(permanentNumber: number){
    this.router.navigate(['home/details/',permanentNumber]);
  }
}
