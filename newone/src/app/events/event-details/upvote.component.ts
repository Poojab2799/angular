import{Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector:'upvote',
    styleUrls:['./upvote.component.css'],
    template:`
     <div class="votingWidgetContainer" pointable (click)="onClick()">
       <div class="well votingWidget">
          <div class="votingButton">
          <i  class="fa fa-heart" style="font-size:24px"></i>
            
           <div>  
     <div [style.background-color]="iconColor" class="badge badge-inverse votingCount">
       <div>{{count}}</div> 
     </div>
     </div>
     </div>     
    `
})

export class UpvoteComponent
{
   @Input() count!:number
   @Input() set voted(val: any)
   {
     this.iconColor=val ? 'red' : 'white';
   }
   @Output() vote=new EventEmitter();
   iconColor!:string;
   onClick()
{
    this.vote.emit({})
}

}