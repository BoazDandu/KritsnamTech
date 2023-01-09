import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

import { HeaderComponent } from './base/header/header.component';
import { FooterComponent } from './base/footer/footer.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { VerifyemailComponent } from './pages/verifyemail/verifyemail.component';
import { SidebarComponent } from './base/sidebar/sidebar.component';
import { SidemenuComponent } from './base/sidemenu/sidemenu.component';
import { HomeModule } from './pages/home/home.module';
import { PcbModule } from './pages/pcb/pcb.module';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AuthService } from './shared/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    VerifyemailComponent,
    SidebarComponent,
    SidemenuComponent,
    SignUpComponent,
    VerifyemailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    HomeModule,
    PcbModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
