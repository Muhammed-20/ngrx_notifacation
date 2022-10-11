import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  public doctors: Array<any> = [{
    id0: ['Muhammed Ali Akşit', 'Mustafa Akşit', 'Bilgin Savran', 'Sultan Savran'],
    id1: ['Ayşenur Akşit', 'Sevim Akşit'],
    id2: ['Aysun Top', 'Şerife Turna'],
    id3: ['Levent Koman', 'Buğra Yüksel'],
    id4: ['Sultan Savran', 'Davut Apaydın']
  }
  ]
  constructor() { }
  
 
}
