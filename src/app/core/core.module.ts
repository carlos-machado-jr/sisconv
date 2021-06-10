import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorInterceptorProvider } from './interceptors/error.interceptor'
import { HeadersInterceptorProvider } from './interceptors/headers.interceptor'
import { LoadingInterceptorProvider } from './interceptors/loading.interceptor'
import { AuthGuard } from './guards/auth.guard'
import { LoaderGuard } from './guards/loader.guard'
import { AccountService } from '../shared/util/services/account.service';
import { StorageService } from '../shared/util/services/storage.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ],
  exports: [],
  providers: [HeadersInterceptorProvider,ErrorInterceptorProvider, LoadingInterceptorProvider, AuthGuard, LoaderGuard, AccountService, StorageService]
})
export class CoreModule { }
