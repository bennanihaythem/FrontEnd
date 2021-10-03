import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { DevopsServicesService } from '../devops-services.service';
import { Devops } from '../devops.model';

@Component({
  selector: 'app-list-devops',
  templateUrl: './list-devops.component.html',
  styleUrls: ['./list-devops.component.css']
})
export class ListDevopsComponent implements OnInit {

  public listDevops: Array<Devops> = [];
  constructor(private devopsService:DevopsServicesService) { }

  ngOnInit(): void {
    this.devopsService.onGetDevops().subscribe(
      data=>{
        this.listDevops=Object(data);
        console.log(this.listDevops);
      },error=>{
        console.log(error)
      }
    )
  }

  onEditDevops(list:Devops)
  {
this.devopsService.onEditDevops(list).subscribe(
  data=>{
    
  }
)
  }

}
