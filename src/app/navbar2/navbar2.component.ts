import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {

  title = 'gifthub';

  constructor(private service?: WebService,private localStorage?: LocalStorageService,private router?: Router) { }  

  ngOnInit(): void {
  
  }

  cerrarSesion(){
    this.localStorage.clear('Usuario')
    this.localStorage.clear()
    this.router.navigate([ '/' ]); 
  }
}
