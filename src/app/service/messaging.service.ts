import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  currentMessage = new BehaviorSubject(null);
  angularFireMessaging: any;

  constructor(private AngularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.messaging.subscribe(
      (_messaging: { onMessage: { bind: (arg0: any) => any; }; onTokenRefresh: { bind: (arg: any) => any; }; }) => {
        _messaging.onMessage = _messaging.onMessage.bind(_messaging);
        _messaging.onTokenRefresh =
        _messaging.onTokenRefresh.bind(_messaging);
      }
    )

  }

  requestPermission() {

  }
}
