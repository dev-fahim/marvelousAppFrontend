import { NotificationMessageComponent } from './notification-message/notification-message.component';
import { BackAppService } from './service/back-app/back-app.service';
import { ArchiveService } from './service/archive/archive.service';
import { LoginComponent } from './login/login.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FundService } from './service/credit/fund.service';
import { SourceService } from './service/credit/source.service';
import { HeadingService } from './service/expenditure/heading.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RecordService } from './service/expenditure/record.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SharedModule } from './shared/shared.module';
import { FundSettingsService } from './service/fund-settings/fund-settings.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/app/login/auth/httpInterceptor.service';

import { LoanService } from './service/loan/loan.service';
import { LoanGivingService } from './service/loan-giving/loan-giving.service';
import { NotifyService } from './service/notify.service';

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoAccessComponent,
    SidebarComponent,
    ToolbarComponent,
    LoginComponent,
    NotificationMessageComponent
  ],
  imports: [
    LoginModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFToken',
    }),
    SharedModule,
    ChartsModule
  ],
  providers: [
    FundService,
    SourceService,
    HeadingService,
    RecordService,
    FundSettingsService,
    LoanService,
    ArchiveService,
    BackAppService,
    LoanGivingService,
    NotifyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
