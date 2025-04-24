import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';



@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  providers: [
    { provide: LOCALE_ID , useValue: 'fr-FR' },
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class CoreModule { }
