import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {RouterModule} from '@angular/router';
import { GreetingComponent } from './components/greeting/greeting.component';
import { HiComponent } from './components/hi/hi.component';
import { OlaComponent } from './components/ola/ola.component';
import { StartComponent } from './components/start/start.component';
import { SizePipe } from './size.pipe';
import { GreenDirective } from './green.directive';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    HiComponent,
    OlaComponent,
    StartComponent,
    SizePipe,
    GreenDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: StartComponent},
      {path: 'hi', component: HiComponent},
      {path: 'ola', component: OlaComponent},
      {path: 'greeting', component: GreetingComponent, children: [
        {path: 'hi', component: HiComponent},
        {path: 'ola', component: OlaComponent}
        ]}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
