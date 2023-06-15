import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FleetData } from '../models/fleetData';

@Injectable()
export class FleetOverviewService {
  private dataUrl = environment.dataUrl;

  constructor(private http: HttpClient) {}

  getFleetData(): Observable<FleetData> {
    return this.http.get<FleetData>(this.dataUrl);
  }
}
