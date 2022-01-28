import { Injectable } from '@angular/core';
import { Eventservice } from '../shared/event.services';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';


@Injectable(

)
export class EventResolver implements Resolve<any>{
    constructor(private eventService:Eventservice)
    {

    }
    resolve(route:ActivatedRouteSnapshot) {
     return this.eventService.getEvent(route.params['id'])
    }
}