import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { Store } from '@ngrx/store';

import { PoliklinikService } from '../services/poliklinik.service';
import { DoctorService } from '../services/doctor.service';
import { submit } from '../+state/action';
import { LocalService } from '../services/storeLocalStorage.service';

@Component({
  selector: 'app-form-appo',
  templateUrl: './form-appo.component.html',
  styleUrls: ['./form-appo.component.css']
})
export class FormAppoComponent implements OnInit {
  public options: any[] = [];
  public myControl = new FormControl('');
;
  public dateControl: any;
  public filteredOptions!: Observable<string[]>;
  public selectedValue!: any;
  public foods: Array<any> = [];
  constructor( private store: Store,private PoliklinikService:PoliklinikService,private DoctorService:DoctorService,private SubmitService:LocalService) {}
  
 
  ngOnInit(): void {
    this.getPolikiniliks();
    this.getDoctors();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  private getPolikiniliks(): void {
    let arr: any = [];
    this.PoliklinikService.polikliniks.forEach((res) => {
      this.options.push(res.name)
    })
  }
  private getDoctors(): void {
    this.myControl.valueChanges.subscribe((v: any) => {

      this.PoliklinikService.polikliniks.forEach((res: any, index: number) => {
        if (v == res.name) {
          return this.foods = this.DoctorService.doctors[0]['id' + '' + index];
        }
      })
    })
  }
  getir() {
    this.store.dispatch(submit({ pol: this.myControl.value, doc: this.selectedValue, date: this.dateControl }))
    
  }
 
}
