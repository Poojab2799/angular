import { ActivatedRoute} from '@angular/router';
import { Component, OnInit } from "@angular/core";

import { Eventservice } from './shared/event.services';
import { IEvent} from './shared/index';

@Component({       
  template: `    <div>    <h1>Upcoming Angular Events</h1>    <hr/>    <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
    <events-thumbnail   [event]= "event"></events-thumbnail>
    </div>  
  </div>
    </div>    `})

export class EventsListComponent implements OnInit{ 
     events!: IEvent[];       
     constructor(private eventService:Eventservice,  private route:ActivatedRoute){            }  
     ngOnInit(){     
      this.events= this.route.snapshot.data['events'];
   }   
    
}
