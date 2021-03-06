import { Component } from "@angular/core"
import { AuthService } from '../user/auth.service';
import {  Eventservice } from '../events';
import {ISession} from '../events/shared/event.model';



@Component({

    selector:'nav-bar',

    templateUrl:'./navbar.component.html',

    styles:[`

    .nav.navbar-nav{font-size:15px;}

    #searchForm{margin-right:100px;}

    @media(max-width:1200px) {#searchForm{diaplay:none}}

    li > a.active { color: #F97924; }

    `]

   

})

export class NavBarComponent{

    searchTerm:string="";
    foundSessions!:ISession[];
   asession:any;

    constructor(public auth:AuthService, private eventService:Eventservice)
    {

    }
    searchSessions(searchTerm:string)
  {
    this.eventService.searchSessions(searchTerm).subscribe
    ((sessions: any)=> {
      this.foundSessions=sessions;
      this.asession=this.foundSessions;
      // console.log(this.foundSessions);
 
    })
  }
}