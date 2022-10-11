import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { ApState } from '../+state/ap.model';
import { LocalService} from '../services/storeLocalStorage.service';




@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
data: any;
public appointment:Array<any> = []
  constructor(private store$: Store<ApState>,private SubmitService:LocalService) { }
  ngOnInit(): void {
     this.getStore() 

   
  }
  public getStore() {
    this.store$.subscribe((res) => {
      this.data = res;
      
    this.appointment =  this.data.content.appointment;
    })
  } 
}
