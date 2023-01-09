import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/home/homepage/homepage.component';
import { PcbpageComponent } from './pages/pcb/pcbpage/pcbpage.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { VerifyemailComponent } from './pages/verifyemail/verifyemail.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/SignIn',
    pathMatch: 'full'
  },
  {
    path: "SignIn",
    component: SignInComponent,
    data: {
      title: "Login Page || KritsnamTechnologies"
    }
  },
  {
    path: "SignUp",
    component: SignUpComponent,
    data: {
      title: "Register Page || KritsnamTechnologies"
    }
  },
  {
    path: "verifyemailaddress",
    component: VerifyemailComponent,
    data: {
      title: "Pcb Page || KritsnamTechnologies"
    },
  },
  {
    path: "Home",
    component: HomepageComponent,
    data: {
      title: "CMS Panel || KritsnamTechnologies"
    },
    canActivate: [AuthGuard]
  },
  {
    path: "pcb",
    component: PcbpageComponent,
    data: {
      title: "Pcb Page || KritsnamTechnologies"
    },
    canActivate: [AuthGuard]
  },
  {
    path: "  verifyemailaddress",
    component: PcbpageComponent,
    data: {
      title: "Pcb Page || KritsnamTechnologies"
    },
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
