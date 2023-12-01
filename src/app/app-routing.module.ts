import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
const routes: Routes = [
  // { path: 'products', loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule) },
  // { path: 'users', loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule) },
  // { path: 'orders', loadChildren: () => import('./components/orders/orders.module').then(m => m.OrdersModule) },
  // { path: 'categories', loadChildren: () => import('./components/categories/categories.module').then(m => m.CategoriesModule) },
  // { path: 'brands', loadChildren: () => import('./components/brands/brands.module').then(m => m.BrandsModule) },
  // { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  // { path: 'cart', loadChildren: () => import('./components/cart/cart.module').then(m => m.CartModule) },
  // { path: 'checkout', loadChildren: () => import('./components/checkout/checkout.module').then(m => m.CheckoutModule) },
  // { path: 'contact', loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule) },
  // { path: 'about', loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule) },
  { path: 'login', component: LoginComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'profile', component:ProfileComponent },
  { path:'products', component:ProductsComponent},
  {path:'home', component:HomeComponent},
  {path: 'add-product', component:AddProductComponent}
  // { path: 'forgot-password', loadChildren: () => import('./components/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
  // { path: 'reset-password', loadChildren: () => import('./components/reset-password/reset-password.module').then(m => m.ResetPasswordModule) },
  // { path: '404', loadChildren: () => import('./components/not-found/not-found.module').then(m => m.NotFoundModule) },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
