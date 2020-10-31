import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'gifthub';

  constructor(private service: WebService,private localStorage: LocalStorageService,private router: Router) { }  

  ngOnInit(): void {
  
  }

  cerrarSesion(){
    this.localStorage.clear('Usuario')
    this.localStorage.clear()
    this.router.navigate([ '/' ]); 
  }

}
