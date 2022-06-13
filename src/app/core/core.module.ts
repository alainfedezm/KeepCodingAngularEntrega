import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { HTTPErrorInterceptor } from './interceptor/http-error.interceptor';
import { CustomErrorHandler } from './handler/custom-error-handler';
import { ErrorComponent } from './components/notFound/error.component';

@NgModule({
  declarations: [HeaderComponent, ErrorComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HTTPErrorInterceptor, multi: true },
    { provide: ErrorHandler, useClass: CustomErrorHandler },
  ],
})
export class CoreModule {}
