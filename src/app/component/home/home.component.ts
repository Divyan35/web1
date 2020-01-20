import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggle() {
   // $('.ui.sidebar').sidebar('toggle');
   $('#app .ui.sidebar')
        .sidebar({context:$('#app')})
        //.sidebar('setting', 'transition', 'overlay')
        .sidebar('toggle');
  }

}
