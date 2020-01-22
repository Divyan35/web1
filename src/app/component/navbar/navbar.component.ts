import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,private location: Location) { }

  ngOnInit() {
  }
  
  isHomeRouteActivated(): boolean{
    //Find more better way to do it.
    return this.location.path().indexOf('/who-we-are') > -1;
}

}
