import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms'
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './+state/reducer';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationModule } from './notification/notification.module';



@NgModule({
  declarations: [
    AppComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NotificationModule,
    StoreModule.forRoot({ content:  todoReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
