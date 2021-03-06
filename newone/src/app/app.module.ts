import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import {
  EventsListComponent,
  EventsThumbnailComponent ,
  Eventservice,
  CreateEventComponent ,
  EventDetailsComponent,
  EventListResolver,

  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  VoterService,
  LocationValidator,
  UpvoteComponent,
  EventResolver

}from './events/index';
import { EventsAppComponent } from './events-app.component';

import { NavBarComponent } from './nav/navbar.component';

import { JQ_TOKEN,  TOASTR_TOKEN , Toastr, collapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective} from './common/index';

import { appRoutes} from './routes';

import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


 let toastr:Toastr = window['toastr'];
 let jQuery = window['$'];


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    EventDetailsComponent,
    SessionListComponent,
    CreateSessionComponent,
    collapsibleWellComponent,
    SimpleModalComponent,
    UpvoteComponent,
    ModalTriggerDirective,
   LocationValidator,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ VoterService,Eventservice, {provide:TOASTR_TOKEN, useValue:toastr} ,{provide:JQ_TOKEN, useValue:jQuery} , EventResolver,EventListResolver,AuthService,
  {
    provide: 'canDeactivateCreateEvent',
    useValue:checkDirtyState
  }],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent)
{
  if(component.isDirty)
    return window.confirm(' you are not saved the data , do you really want to cancel? ');
  return true;  
}
