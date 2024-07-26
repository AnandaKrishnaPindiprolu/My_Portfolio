import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { TalentsComponent } from './talents/talents.component';
import { StrengthsComponent } from './strengths/strengths.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillsComponent,
    TalentsComponent,
    StrengthsComponent,
    CertificationsComponent,
    SocialmediaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
