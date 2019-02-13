import { NotifyService } from './../service/notify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-message',
  templateUrl: './notification-message.component.html',
  styleUrls: ['./notification-message.component.scss']
})
export class NotificationMessageComponent implements OnInit {
  notification = false;
  type = '';
  message = '';
  constructor(private _notify: NotifyService) { }

  ngOnInit() {
    this._notify.get_notify()
      .subscribe(
        (value) => {
          this.type = value.type;
          this.message = value.message;
          if (value.trigger) {
            this.notification = true;
          }
        }
      )
  }

  onCloseNotification() {
    this._notify.set_notify("", "", false);
    return this.notification = !this.notification;
  }

}
