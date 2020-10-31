import { Component, OnInit } from '@angular/core';
import { WebService } from './web.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'gifthub';

  constructor(private service: WebService,private localStorage: LocalStorageService,private router: Router) { }  

  ngOnInit(): void {
    this.service.getUsuarios()
  }

  cerrarSesion(){
    this.localStorage.clear('Usuario')
    this.localStorage.clear()
    this.router.navigate([ '/' ]); 
  }
}
