import { Component } from '@angular/core';
import {AppStateService} from "../../services/app-state.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(public appState:AppStateService) {
  }
  actions:Array<any>= [
    {title: 'add', route: '/admin/add', icon: 'IconCirclePlus'},
    {title: 'Products', route: '/products'},
    {title: 'Orders', route: '/orders'},
    {title: 'Customers', route: '/customers'},

  ]
  currentAction:any;
  setCurrentAction(action:any){
    this.currentAction = action;
  }
}
