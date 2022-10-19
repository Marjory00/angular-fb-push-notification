import { Component } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { MessagingService } from './service/messaging.service';


@Component({
  selector: 'app-root',
 template: `
 <button (click)="
})
export class AppComponent {
  title = 'angular-fb-push-notification';
message: Observable<any>|Subscribable<any>|Promise<any>;
}
