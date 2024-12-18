import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';

import { ServicesIpmComponent } from './services-ipm/services-ipm.component';
import { FooterComponent } from './footer/footer.component';
import { UserloginComponent } from './userlogin/userlogin.component';

import { UregComponent } from './ureg/ureg.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserSucessLoginComponent } from './user-sucess-login/user-sucess-login.component';

import { DashboardComponent } from './user-sucess-login/dashboard/dashboard.component';
import { ProfileComponent } from './user-sucess-login/profile/profile.component';
import { NavloginComponent } from './user-sucess-login/navlogin/navlogin.component';
import { QuestionsComponent } from './user-sucess-login/questions/questions.component';
import { PoliciesComponent } from './user-sucess-login/policies/policies.component';
import { HistoryComponent } from './user-sucess-login/history/history.component';

import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminnavbarComponent } from './adminsuccesslogin/adminnavbar/adminnavbar.component';
import { AdmindashboardComponent } from './adminsuccesslogin/admindashboard/admindashboard.component';
import { AdmincustomersComponent } from './adminsuccesslogin/admincustomers/admincustomers.component';
import { AdminUnknownCustomerComponent } from './adminsuccesslogin/admin-unknown-customer/admin-unknown-customer.component';
import { AdminPolicysComponent } from './adminsuccesslogin/admin-policys/admin-policys.component';
import { AdminQueryComponent } from './adminsuccesslogin/admin-query/admin-query.component';

import { AddAdminByAdminComponent } from './adminsuccesslogin/add-admin-by-admin/add-admin-by-admin.component';
import { ViewadmisComponent } from './adminsuccesslogin/addAdminByAdmin/viewadmis/viewadmis.component';
import { AddnewadminComponent } from './adminsuccesslogin/addAdminByAdmin/addnewadmin/addnewadmin.component';
import { ReplyComponent } from './adminsuccesslogin/admin-query/reply/reply.component';

import { AddPolicyComponent } from './adminsuccesslogin/admin-policys/add-policy/add-policy.component';
import { UpdatePolicyComponent } from './adminsuccesslogin/admin-policys/update-policy/update-policy.component';
import { DeletePolicyComponent } from './adminsuccesslogin/admin-policys/delete-policy/delete-policy.component';
import { AppliedPolicyHolderComponent } from './adminsuccesslogin/admin-policys/applied-policy-holder/applied-policy-holder.component';
import { ApproveddPolicyHolderComponent } from './adminsuccesslogin/admin-policys/approvedd-policy-holder/approvedd-policy-holder.component';
import { RejectedPolicyHolderComponent } from './adminsuccesslogin/admin-policys/rejected-policy-holder/rejected-policy-holder.component';
import { WaitingpPolicyHolderComponent } from './adminsuccesslogin/admin-policys/waitingp-policy-holder/waitingp-policy-holder.component';
import { PolicysViewByAdminComponent } from './adminsuccesslogin/admin-policys/policys-view-by-admin/policys-view-by-admin.component';
import { ApplyUpdateComponent } from './adminsuccesslogin/admin-policys/update-policy/apply-update/apply-update.component';
import { UpdateLowerAdminComponent } from './adminsuccesslogin/addAdminByAdmin/update-lower-admin/update-lower-admin.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { ChangePasswordComponent } from './user-sucess-login/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ContactusComponent,
    AboutComponent,
    ServicesIpmComponent,
    FooterComponent,
    UserloginComponent,
    UregComponent,
    UserSucessLoginComponent,
    AdminloginComponent,
    DashboardComponent,
    NavloginComponent,
    ProfileComponent,
    QuestionsComponent,
    PoliciesComponent,  // Your PoliciesComponent here
    HistoryComponent,
    AdmindashboardComponent,
    AdminnavbarComponent,
    AdmincustomersComponent,
    AdminUnknownCustomerComponent,
    AdminPolicysComponent,
    AdminQueryComponent,
    AddAdminByAdminComponent,
    ViewadmisComponent,
    AddnewadminComponent,
    ReplyComponent,
    AddPolicyComponent,
    UpdatePolicyComponent,
    DeletePolicyComponent,
    AppliedPolicyHolderComponent,
    ApproveddPolicyHolderComponent,
    RejectedPolicyHolderComponent,
    WaitingpPolicyHolderComponent,
    PolicysViewByAdminComponent,
    ApplyUpdateComponent,
    UpdateLowerAdminComponent,
    PageErrorComponent,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
