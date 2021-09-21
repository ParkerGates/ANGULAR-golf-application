import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableData } from 'src/app/interfaces/table-data';
import { TableDataService } from 'src/app/services/table-data.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  images = ["1", "2", "3", "4", "5","6","7","8","9"]
  dataGot:boolean = false;
  course:TableData = {
    "holes": { "data": ["","","","","","","","",""], "total": "" },
    "yards": { "data": ["","","","","","","","",""], "total": "" },
    "pars": { "data": ["","","","","","","","",""], "total": "" },
    "handicaps": { "data": ["","","","","","","","",""], "total": "" },
    "players": [
        { "name": "", "data": ["","","","","","","","","","","",""], "total": "" },
    ]
}

  constructor(
    public td: TableDataService,
    private route: Router,
  ) { }

  ngOnInit(): void {
    if (this.td.loadPass === false) {
      this.route.navigate(['/loadin'])
    }
    else {
      this.course = this.td.course;
      this.dataGot = true;
    }
  }
  
}
