import { Component } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { MessagingService } from './service/messaging.service';


@Component({
  selector: 'app-root',
 template: `
 <button (click)="requestPermission()">
  Hello this is a chat app. You should let us send you notifications for this reason.
 </button>
 `
})
export class AppComponent {
  title = 'angular-fb-push-notification';


constructor(private afMessaging: AngularFireMessaging) { }
  requestPermission() {
    this.afMessaging.requestPermission
    .subscribe(
      () => { console.log('Permission granted!'); },
      (error) => { console.error(error); },

    );
  }
}

function requestPermission() {
  throw new Error('Function not implemented.');
}

