import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BroadcastserviceService {

  // hide the signin and signup
  hideButtons = new EventEmitter<any>();

  hideBuyerMenu = new EventEmitter<any>();

  hideFooter = new EventEmitter<any>();

}
