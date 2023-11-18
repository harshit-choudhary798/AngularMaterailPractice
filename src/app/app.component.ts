import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMaterailPractice';
  data:any=''
  condition:boolean=true
  amount:number=0
  valid=true
}
