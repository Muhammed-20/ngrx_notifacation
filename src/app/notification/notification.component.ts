import { Component, OnInit } from '@angular/core';

import { ActionReducer, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { ApState } from '../+state/ap.model';
import { LocalService} from '../services/storeLocalStorage.service';
import { Model } from '../app.model';
import { selectAllTodos } from '../+state/select';




@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
data: any;

public appointment:any
  
  constructor(private store$: Store,private localService:LocalService) {
   
   }
  ngOnInit(): void {
     this.getStore() 
  }
  public getStore() {
    this.store$.subscribe(res => {
     this.data=res;
     this.appointment = this.data.appointment.appointment
    })
  } 
}
