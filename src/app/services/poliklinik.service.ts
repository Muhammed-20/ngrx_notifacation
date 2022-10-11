import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoliklinikService {
  public polikliniks: Array<any> =  [
    {
      id: 1,
      name: 'Göz Hastalıkları'
    },
    {
      id: 2,
      name: 'Kardiyoloji'
    },
    {
      id: 3,
      name: 'Nöroloji'
    },
    {
      id: 4,
      name: 'Üroloji'
    },
    {
      id: 4,
      name: 'Psikoloji'
    }
  ]
  constructor() {}
}
