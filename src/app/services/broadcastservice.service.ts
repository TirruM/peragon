import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BroadcastserviceService {

  // hide the signin and signup
  hideButtons = new EventEmitter<any>();

}
