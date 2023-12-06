import { Component } from '@angular/core';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(public appState:AppStateService){}

}
