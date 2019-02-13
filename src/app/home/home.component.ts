import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../login/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  toggled = true;
  is_approved = true;
  is_locked = false;
  is_message = false;
  serverError = false;

  constructor(private _auth: AuthService) { }

  ngOnInit() {

    $(".sidebar-dropdown > a").click(function () {
      $(".sidebar-submenu").slideUp(200);
      if (
        $(this)
          .parent()
          .hasClass("active")
      ) {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .parent()
          .removeClass("active");
      } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .next(".sidebar-submenu")
          .slideDown(200);
        $(this)
          .parent()
          .addClass("active");
      }
    });

    this._auth.getRawUserPermission()
      .subscribe(
        (response) => {
          this.is_approved = response.account_status.is_approved;
          if (this.is_approved === false) {
            this.is_message = true;
          }
        },
        (error: HttpErrorResponse) => {
          this.is_message = true;
          if (error.status === 403) {
            return this.is_locked = true;
          }
          return this.serverError = true;
        }
      );
  }

  toggle_btn() {
    return this.toggled = !this.toggled;
  }

}
