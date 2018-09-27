import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnableActionService {
private editEnable = false;
@Output() enableActionEmit = new EventEmitter();
  constructor() { }
  actionUpdate(actionStatus:boolean){
    this.editEnable = actionStatus;
    this.enableActionEmit.emit(this.editEnable);
  }
}
