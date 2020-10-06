import { Component, OnInit } from '@angular/core';
import { WebService } from './web.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'gifthub';

  constructor(private service: WebService) { }  

  ngOnInit(): void {
    this.service.getUsuarios()
  }
}
