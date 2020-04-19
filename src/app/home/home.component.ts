import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataArray: any = [];
  
  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  getApiData() {
    this.api.getData().subscribe(data => {
      this.dataArray = data;
      console.log(this.dataArray[0]);
    });
  }

}
