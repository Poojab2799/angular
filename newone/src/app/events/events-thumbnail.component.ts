import { Component, Input, Output,EventEmitter } from '@angular/core';
import { IEvent } from './shared/index';



@Component({
    selector:'events-thumbnail',
     template:`
     <div [routerLink]="['/events',event.id]"   class="well hoverwell thumbnail">
      <h2>{{ event?.name | uppercase}} </h2>
      <div>Date: {{ event?.date | date:'shortDate'}} </div>
      <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
      Time: {{ event?.time}} 
      <span *ngSwitchCase="'8:00 am'"> (Early start) </span>
      <span *ngSwitchCase="'10:00 am'"> (Late start) </span>
      <span *ngSwitchDefault> (Normal start) </span>
      </div>
      <div> Price: {{ event?.price | currency:'USD'}}</div>
      <div [hidden]="!event?.location">
         <span>Location:{{event?.location?.address}} </span>
         <span class="pad-left">{{event?.location?.city}}</span>
      </div>
      <div *ngIf="event?.onlineUrl">
      OnlineUrl: {{ event?.onlineUrl}}
      </div>
    </div> 
     `
     ,
     styles:[
         
      `
  
      .thumbnail { min-height:215px;}
      .pad-left{ margin-left:10px; }
      .div well { color: #bbb; }
      `
    ] 
})
export class EventsThumbnailComponent
{
   @Input()
   event!: IEvent;
getStartTimeStyle(){
   if(this.event.time === '8:00 am')
    return { color: '#003300' , 'font-weight':'bold'};
   return {}
}
// someproperty:string='some value'
// logfoo()
// {
//     console.log('foo');
// }
// @Output()
// eventClick=new EventEmitter()
// handleClickMe()
// {
//    this.eventClick.emit(this.event.name);
// }
}   