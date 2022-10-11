import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';
import { StoreModule} from '@ngrx/store'
import { HeaderComponent } from '../header/header.component';
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatBadgeModule} from '@angular/material/badge'
import { todoReducer } from '../+state/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { FormAppoComponent } from '../form-appo/form-appo.component';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from '../+state/effect';
import { LocalService } from '../services/storeLocalStorage.service';







@NgModule({
  declarations: [NotificationComponent,HeaderComponent,FormAppoComponent],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    StoreModule.forRoot({ todos:todoReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([TodoEffects]),
    MatToolbarModule,
    MatBadgeModule
    
  ],
  providers:[LocalService],
  exports: [NotificationComponent]
})
export class NotificationModule { }
