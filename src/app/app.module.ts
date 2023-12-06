import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { IconsModule } from "./icons/icons.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClarityModule } from "@clr/angular";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AddProductComponent,
    EditProductComponent,
    ProductDetailComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ProductsComponent,
    HomeComponent,
    SidebarComponent,
    AdminTemplateComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    IconsModule,
    ReactiveFormsModule,
    ClarityModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
