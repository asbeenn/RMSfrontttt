import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../Services/property.service';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  constructor(public service: PropertyService){
  }
    ngOnInit():void{
      this.service.listProperty();
   
    }

  
}
