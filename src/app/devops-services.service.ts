import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Devops } from './devops.model';

@Injectable({
  providedIn: 'root'
})
export class DevopsServicesService {

private urlDevops:string=process.env.url;
//"http://localhost:8089/devops/";
  constructor(private httpClient:HttpClient) { }

  /*
  @Author: Haythem
  @Description:
  @Parmas: 
  @Last Update: 
  */
  public onSaveDevops(devops:Devops):Observable<Devops>
  {
    return this.httpClient.post<Devops>(this.urlDevops,devops);
  }
  public onGetDevops():Observable<Devops>
  {
    return this.httpClient.get<Devops>(this.urlDevops);
  }
  public onEditDevops(list:Devops):Observable<Devops>
  {
    return this.httpClient.put<Devops>(this.urlDevops,list);
  }
}
