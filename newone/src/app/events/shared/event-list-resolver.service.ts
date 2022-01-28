import { Injectable } from '@angular/core';
import { Eventservice } from '../shared/event.services';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable(

)
export class EventListResolver implements Resolve<any>{
    constructor(private eventService:Eventservice)
    {

    }
    resolve() {
     return this.eventService.getEvents()
    }
}