import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
interface NotifyModel {
  type: string;
  message: string;
  trigger: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  private notify = new BehaviorSubject<NotifyModel>({type: "error", message: "oh oh", trigger: false});

  set_notify(type: string, message: string, trigger: boolean) {
    this.notify.next({type: type, message: message, trigger: trigger});
  }

  get_notify() {
    return this.notify;
  }

  constructor() { }
}
