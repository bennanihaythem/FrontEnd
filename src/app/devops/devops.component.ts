import { Component, OnInit } from '@angular/core';
//import { error } from 'console';
import { DevopsServicesService } from '../devops-services.service';
import { Devops } from '../devops.model';

@Component({
  selector: 'app-devops',
  templateUrl: './devops.component.html',
  styleUrls: ['./devops.component.css']
})
export class DevopsComponent implements OnInit {

 // public devops:any;

  constructor(private devopsService:DevopsServicesService) { }

  ngOnInit(): void {
  }

  onAddDevops(devops:any)
  {
    this.devopsService.onSaveDevops(devops).subscribe(
      data=>
        {

          console.log("Le devops est enregistree",data);
        },error=>
        {
          console.log(error);
        }
    )
  }
}
