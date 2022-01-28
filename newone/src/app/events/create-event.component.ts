import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Eventservice } from './shared';
@Component({
    templateUrl:'./create-event.component.html',
    styles:[`
    em { float:right; 
         color:#E05C65;
      padding-left:10px;}
      .error input{background-color:#E3C3C5;}
      .error ::-webkit-input-placeholder{color:#999; }
      .error ::-moz-placeholder{color:#999; }
      .error :-moz-placeholder{color:#999; }
      .error :ms-input-placeholder{color:#999; }
    `]
  
})

export class CreateEventComponent
{
    newEvent:any
//    event:any
    isDirty:boolean=true;
    // ngOnInit()
    // {
    //     this.event={
          
    //         name:'NG  spectacular',
    //         date:'8/8/28',
    //         time:'10:00am',
    //         price:500,
          
    //         location:{
    //             address:'456 happy st',
    //             city:'helicina',
    //             country:'america'
    //         },
    //         onlineUrl:'https://spectacular.com',
    //         imageUrl:'https://spectacular.com/logo.png'
    //     }
    // }
    constructor(private router:Router,private eventService:Eventservice)
    {

    }

    saveEvent(formValues:any)
    {
      this.eventService.saveEvent(formValues).subscribe(()=>{
        this.isDirty=false
        this.router.navigate(['/events']);
      });
      
    }
   cancel()
   {
      this.router.navigate(['/events']);
   }
}
