import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { WhoWeAreComponent } from './component/who-we-are/who-we-are.component';
import { WhatWeDoComponent } from './component/what-we-do/what-we-do.component';
import { JoinOurTeamComponent } from './component/join-our-team/join-our-team.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ContactComponent } from './component/contact/contact.component';
import { VisionComponent } from './component/vision/vision.component';
import { ExpertiseComponent} from './component/expertise/expertise.component';

const Route : Routes = [
  {path: '', redirectTo: "/home", pathMatch: 'full'},
  {path:'home', component: HomeComponent,
    children:[
      {path:'vision', component: VisionComponent},
      {path:'expertise', component: ExpertiseComponent}
    ]
  },
  {path:'who-we-are', component: WhoWeAreComponent},
  {path:'what-we-do', component: WhatWeDoComponent},
  {path:'join-our-team', component: JoinOurTeamComponent},
  {path:'contact', component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhoWeAreComponent,
    WhatWeDoComponent,
    JoinOurTeamComponent,
    NavbarComponent,
    ContactComponent,
    VisionComponent,
    ExpertiseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Route),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
