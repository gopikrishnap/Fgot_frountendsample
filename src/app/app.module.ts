import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { RouterConfigLoader } from '@angular/router/src/router_config_loader';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { RegisterService} from './register.service'
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

const routes: Routes = ([
  {path:"",component:SignupComponent},
  {path:"signup",component:SignupComponent},
  {path:"Login",component:LoginComponent},
  {path:"forgotpassword",component:ForgotpasswordComponent},
  {path:"resetpassword/:id",component:ResetpasswordComponent}
])

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule



  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
