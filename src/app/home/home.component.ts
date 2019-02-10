import { AuthService } from './../login/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { RootObject } from '../service/models';
import * as errors from '../common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  toggled = true;
  is_approved = true;
  is_locked = false;

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

    this._auth.getUserPermission()
      .subscribe(
        (response) => {
          this.is_approved = response.account_status.is_approved;
        },
        (error: errors.AppError) => {
          return this.is_locked = true;
        }
      );
  }

  toggle_btn() {
    return this.toggled = !this.toggled;
  }

}
