import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ecom-front';
  actions:Array<any> = [
    {title :"Home","route":"/home",icon:"house"},
    {title :"Products","route":"/products",icon:"shopping-cart"},
    

  ]

  ngOnInit(): void {
    initFlowbite();
  }
}
