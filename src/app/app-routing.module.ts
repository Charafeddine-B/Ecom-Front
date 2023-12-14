import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {CustomersComponent} from "./components/customers/customers.component";
import {OrdersComponent} from "./components/orders/orders.component";
const routes: Routes = [
  { path: "", redirectTo: 'login', pathMatch: 'full' },
  // { path: "**", redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  {path:"dashboard", component:DashboardComponent},
    {path:"customers", component:CustomersComponent},
  {path:"orders", component:OrdersComponent},

      { path: 'profile', component: ProfileComponent },

      {path:"admin", component:AdminTemplateComponent , children:[
      { path: 'products', component: ProductsComponent },
      { path: 'add', component: AddProductComponent },
      { path: 'edit/:id', component: EditProductComponent },
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
